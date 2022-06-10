import { LinkItem } from './LinkItem';
import { Link } from '../../types/Link';

const links: Array<Link> = [
    { url: '#', text: "リンク１"},
    { url: '$', text: "リンク2"},
    { url: '#', text: "リンク３"},
];

let link_items = [];

for(let link of links){
    link_items.push(<LinkItem url={link.url} text={link.text} />);
}

export const Chapter2 = () => {
    return (
        <>
            <ul>
                { link_items }
            </ul>
        </>
    )
}