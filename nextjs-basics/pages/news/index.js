import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {
	return (
		<Fragment>
			<h1>The news page</h1>
			<ul>
				<li>
					<Link href="/news/nextjs-is-cool">NEXT JS IS COOL</Link>
				</li>
				<li>chescake</li>
			</ul>
		</Fragment>
	);
}
export default NewsPage;
