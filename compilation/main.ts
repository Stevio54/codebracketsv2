import * as fs from 'fs';
import * as p from 'path';
import { Post } from '../src/app/Models/post';
export class CompileMDFiles {
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
       const posts =  this.retrieveMDFiles(); // get file data
       fs.writeFile(`../src/assets/content/main.json`, JSON.stringify(posts), { encoding: 'utf8' }, (err) => {
           console.log(err);
       });
    }
}

const runner = new CompileMDFiles();
runner.buildMainMDFile();
