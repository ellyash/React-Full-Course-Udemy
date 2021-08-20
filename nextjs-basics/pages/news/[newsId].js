import { useRouter } from 'next/router';

function DetailPage() {
	const router = useRouter();

	const newsId = router.query.newsId;

	// send a request to the backend API to fetch news item with newsId

	return <h1>News Details</h1>;
}
export default DetailPage;
