import axios from "axios";

const PostPage = ({ post }) => {
  console.log(post);
  return <div></div>;
};

export default PostPage;

export async function getServeSideProps(ctx) {
  const { query } = ctx;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);
  return {
    props: {
      post: data.data,
    },
  };
}
