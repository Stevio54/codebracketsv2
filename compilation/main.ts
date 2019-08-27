import * as fs from 'fs';
import * as p from 'path';
import * as rss from 'rss-generator';
import { Post } from '../src/app/Models/post';
import moment = require('moment');
export class CompileMDFiles {
    public posts: Post[];
    public retrieveMDFiles() {
        const items = fs.readdirSync(`../src/assets/content/posts`, { encoding: 'utf8' });
        const mdInfo = [];
        for (let i = 0; i < items.length; i++) {
            // process the file
            const fil = fs.readFileSync(p.resolve(`../src/assets/content/posts`, items[i]), { encoding: 'utf8' });
            mdInfo.push(new Post(items[i].replace('.md', ''), fil, true));
        }
        return mdInfo;
    }

    public buildMainMDFile() {
       this.posts =  this.retrieveMDFiles(); // get file data
       fs.writeFile(`../src/assets/content/main.json`, JSON.stringify(this.posts), { encoding: 'utf8' }, (err) => {
           console.log(err);
       });
    }

    public buildRSSXML() {
        const feed = new rss({
            title: 'Cloud Brackets',
            description: 'IT Automation from the perspective of an ex-code monkey',
            feed_url: 'http://www.cloudbrackets.com/rss',
            site_url: 'http://www.cloudbrackets.com',
            image_url: 'http://www.cloudbrackets.com/assets/images/logo-dark.png',
            docs: null,
            managingEditor: 'stevencarnes54@gmail.com (Steven Carnes)',
            webMaster: 'stevencarnes54@gmail.com (Steven Carnes)',
            copyright: '2018-2019 Steven Carnes',
            language: 'en',
            pubDate: moment().toLocaleString()
        });

        for (let p of this.posts) {
            if (!p.draft) {
                 /* loop over data and add to feed */
                feed.item({
                    title:  p.title + (p.Subtitle ? `(${p.Subtitle})` : ''),
                    description: p.description,
                    url: 'http://www.cloudbrackets.com/post/' + p.name, // link to the item
                    categories: p.tags,
                    date: p.date, // any format that js Date can parse.
                });
            }
        }
        // cache the xml to send to clients
        fs.writeFile(`../src/assets/content/rss.xml`, feed.xml(), { encoding: 'utf8' }, (err) => {
            console.log(err);
        });
    }
}

const runner = new CompileMDFiles();
runner.buildMainMDFile();
runner.buildRSSXML();
