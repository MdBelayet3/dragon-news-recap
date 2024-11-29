import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BriefNews = () => {
    return (
        <div className="mb-9">
            <div className="flex gap-6">
                <button className="btn btn-secondary">Latest</button>
                <Marquee pauseOnHover={true} direction="left" speed={80}>
                    <Link className="mr-12" to=""> Match Highlights: Germany vs Spain — as it happened...</Link>
                    <Link className="mr-12" to=""> Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</Link>
                    <Link className="mr-12" to=""> Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine</Link>
                    <Link className="mr-12" to=""> America Imported Over $6 Billion in Goods From Russia Since Ukraine Invasion</Link>
                    <Link className="mr-12" to=""> George Russell wears $110 Daniel Ricciardo merchandise to Zandvoort paddock ahead of Dutch GP</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BriefNews;