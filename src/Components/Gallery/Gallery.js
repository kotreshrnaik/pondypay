import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../Images/Gallery/image-1.png";
import Image2 from "../../Images/Gallery/image-1.png";
import Image3 from "../../Images/Gallery/image-1.png";

const Gallery = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Interior-design" },
    { id: 2, imgName: Image2, alt: "", tag: "Interior-design" },
    { id: 3, imgName: Image3, alt: "", tag: "Interior-design" },
    { id: 4, imgName: Image1, alt: "", tag: "Interior-design" },
    { id: 5, imgName: Image2, alt: "", tag: "Interior-design" },
    { id: 6, imgName: Image3, alt: "", tag: "Interior-design" },
  ];

  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div>
      <div id="about-us" className="bg-secondary">
        <Container>
          <Row>
            <Col md={12}>
              <div className="pt-5 pb-5">
                <h2 className="text-center text-white">Gallery</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="portfolio" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <div className="p-2 text-center d-flex flex-row justify-content-center">
            <div className="m-1">
              <TagButton name="all" handlesettag={setTag} />
            </div>
            <div className="m-1">
              <TagButton name="Interior-design" handlesettag={setTag} />
            </div>
            <div className="m-1">
              <TagButton name="Constructions" handlesettag={setTag} />
            </div>
            {/* <div className="m-1">
              <TagButton name="three" handlesettag={setTag} />
            </div> */}
          </div>
          <SRLWrapper>
            <Row>
              {filteredImages.map((item) => (
                <Col md={3} key={item.id}>
                  <div className="m-1 text-center">
                    <a href={item.imgName}>
                      <Image
                        src={item.imgName}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </SRLWrapper>
        </Container>
      </div>
    </div>
  );
};

const TagButton = ({ name, handlesettag }) => {
  return (
    <div>
      <Button
        onClick={() => handlesettag(name)}
        className="btn btn-secondary text-white text-uppercase"
      >
        {name}
      </Button>
    </div>
  );
};

export default Gallery;
