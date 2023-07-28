import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      this is home page
      <Link href="/blogs">
        <a>go to blogs page</a>
      </Link>
    </div>
  );
};

export default HomePage;
