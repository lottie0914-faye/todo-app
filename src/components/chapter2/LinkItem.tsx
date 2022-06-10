import { FC } from 'react';
import { Link } from "../../types/Link";

// export const LinkItem = (props: Link) => {
//     const { url, text } = props;
//     return (
//         <>
//             <li>
//                 <a href={url}>{text}</a>
//             </li>
//         </>
//     )
// }

export const LinkItem: FC<Link> = (props) => {
    const { url, text } = props;
    return (
        <>
            <li>
                <a href={url}>{text}</a>
            </li>
        </>
    );
};