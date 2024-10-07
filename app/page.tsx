import Navbar from "@/components/Navbar/Navbar";
import Card from "@/components/Card/Card";

const images = [
  "/Card/1.webp",
  "/Card/2.webp",
  "/Card/5.jpg",
  "/Card/3.webp",
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <h2 className="py-4 text-2xl text-center font-bold">Past Experiences</h2>
      <div className="flex justify-center mt-10 gap-x-14 px-14 flex-wrap">
        <Card
          title="Go VIP with Kevin Hart"
          host="Kevin Hart"
          isSoldOut={true}
          images={images}
        />
        <Card
          title="Go VIP with Kevin Hart"
          host="Kevin Hart"
          isSoldOut={true}
          images={images}
        />
        <Card
          title="Go VIP with Kevin Hart"
          host="Kevin Hart"
          isSoldOut={true}
          images={images}
        />
        <Card
          title="Go VIP with Kevin Hart"
          host="Kevin Hart"
          isSoldOut={true}
          images={images}
        />
        <Card
          title="Go VIP with Kevin Hart"
          host="Kevin Hart"
          isSoldOut={true}
          images={images}
        />
        <Card
          title="Go VIP with Kevin Hart"
          host="Kevin Hart"
          isSoldOut={true}
          images={images}
        />
        <Card
          title="Go VIP with Kevin Hart"
          host="Kevin Hart"
          isSoldOut={true}
          images={images}
        />
        <Card
          title="Go VIP with Kevin Hart"
          host="Kevin Hart"
          isSoldOut={true}
          images={images}
        />
        <Card
          title="Go VIP with Kevin Hart"
          host="Kevin Hart"
          isSoldOut={true}
          images={images}
        />
      </div>
    </div>
  );
}