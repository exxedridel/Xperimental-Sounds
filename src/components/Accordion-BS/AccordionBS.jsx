import React from "react";

const AccordionBS = () => {
  return (
    <section className="box-shadow">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Lorem ipsum dolor sit amet?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              laudantium iure assumenda quas ut animi, consequatur at sequi
              neque quibusdam rem quos ipsam cumque expedita eos asperiores
              dignissimos laboriosam? Suscipit optio, possimus at asperiores
              neque laudantium beatae atque fugiat excepturi repellendus
              officia?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              nulla illum voluptatum animi eaque asperiores sequi ex impedit
              eveniet quasi
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Lorem ipsum dolor?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              ducimus cum corporis consequatur officiis iure perferendis alias
              velit eius vel animi, aut nobis fugit eaque ipsa mollitia neque
              eos qui adipisci ratione illo? Impedit ex adipisci consectetur!
              Alias dolor corporis fugit sapiente facere inventore tempora nihil
              nostrum velit, dicta magni rerum dignissimos placeat in quae!
              Libero ipsa aspernatur quis deserunt?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionBS;
