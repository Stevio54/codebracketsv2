import * as Moment from 'moment';

export class Post {
    name: string;
    title: string;
    description: string;
    comments: boolean;
    headerImage: string;
    contents: string;
    Subtitle: string;
    date: Moment.Moment;
    draft: boolean;
    tags: Array<string>;

    private titleExp = /^(title:)(.*?)+$/m;
    private descriptionExp = /^(description:)(.*?)+$/m;
    private commentsExp = /^(comments:)(.*?)+$/m;
    private headerImageExp = /^(headerImage:)(.*?)+$/m;
    private SubtitleExp = /^(Subtitle:)(.*?)+$/m;
    private DateExp = /^(date:)(.*?)+$/m;
    private draftExp = /^(draft:)(.*?)+$/m;
    private tagsExp = /^(tags:)(.*?)+$/m;

    private metaRegEx = /^(^---$)((?!(^---$))(.*?\n))+(^---$)$/m;

    private summarizedEx = /(?!(^(#)+))(((?!#)(^.\n*?))+)/gm;


    constructor(name: string, data?: string, listPage?: boolean) {
        this.name = name;

        listPage = listPage ? true : false; // set if not given

        this.contents = data;

        const dataHeader = this.metaRegEx.exec(data);

        if (data && dataHeader) {
            data = dataHeader[0]; // set the header to the data variable, we already have the contents
            this.contents = this.contents.replace(data, ''); // remove the header content from the main body

            if (listPage) {
                // pull only the first 200 characters
                const firstParagraph = this.summarizedEx.exec(this.contents).index;
                const firstParagraphStop = this.contents.indexOf('\n', firstParagraph);
               this.contents = this.contents.substr(firstParagraph, firstParagraphStop - firstParagraph);
            }

            if (this.titleExp.test(data)) {
                // title supplied
                this.title = this.titleExp.exec(data)[0].replace(/(title: )/m, '').replace(/\"/gm, '');
            }
            if (this.descriptionExp.test(data)) {
                // title supplied
                this.description = this.descriptionExp.exec(data)[0].replace(/(description: )/m, '').replace(/\"/gm, '');
            }
            if (this.commentsExp.test(data)) {
                // title supplied
                this.comments = (/true/i).test(this.commentsExp.exec(data)[0].replace(/(comments: )/m, ''));
            }
            if (this.headerImageExp.test(data)) {
                // title supplied
                this.headerImage = this.headerImageExp.exec(data)[0].replace(/(headerImage: )/m, '');
            }
            if (this.SubtitleExp.test(data)) {
                // title supplied
                this.Subtitle = this.SubtitleExp.exec(data)[0].replace(/(Subtitle: )/m, '').replace(/\"/gm, '');
            }
            if (this.DateExp.test(data)) {
                // title supplied
                this.date = Moment(this.DateExp.exec(data)[0].replace(/(date: )/m, ''));
            }
            if (this.draftExp.test(data)) {
                // title supplied
                this.draft = (/true/i).test(this.draftExp.exec(data)[0].replace(/(draft: )/m, ''));
            }
            if (this.tagsExp.test(data)) {
                // title supplied
                this.tags = this.tagsExp.exec(data)[0].replace(/(tags: )/m, '').replace(/\[/m, '').replace(/\]/m, '').split(',');
            }
        }

        // if (!listPage) {
        //     this.applyMetadata(); // apply meta data changes
        // }
    }



}
