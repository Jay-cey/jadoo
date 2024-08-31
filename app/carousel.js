import VerticalCarousel from "./components/Carousel";

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      description:
        "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      image: "/carousel.png",
    },
    {
      id: 2,
      title: "Slide 2",
      description:
        "“Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia magni earum possimus quas hic. Similique eius, nihil sint eos rerum assumenda ut.”",
      name: "Chris Thomas",
      location: "CEO of Red Button",
      image: "/carousel.png",
    },
    {
      id: 3,
      title: "Slide 3",
      description:
        "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      name: "John Doe",
      location: "Lahore, Pakistan",
      image: "/carousel.png",
    },
  ];

  return (
    <>
      <VerticalCarousel slides={slides} />
    </>
  );
};

export default Home;
