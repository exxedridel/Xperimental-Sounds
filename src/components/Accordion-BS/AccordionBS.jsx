import React from "react";

const AccordionBS = () => {
  return (
    <div>
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
              ¿Cúanto cuesta producir una rola?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Todo depende del tipo de proyecto que tengas y de la calidad que
              busques. También dependerá de los estudios en donde grabemos, si
              habrá músicos profesionales en tus rolas o no, etc. Lo mejor es
              que agendemos una cita y platiquemos al respecto para que podamos
              encontrar el mejor camino para tu carrera musical.
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
              ¿Pueden solo mezclar o masterizar mis rolas?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              ¡Claro! Contamos con gran variedad de ingenieros de mezcla y
              máster según tu presupuesto y la calidad buscada.
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
              ¿Hay alguna promoción?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Actualmente tenemos un plan de puntos en donde se te regresa el
              10% del total de producción de tu rola (o rolas) en forma de
              puntos para que los puedas canjear posteriormente por descuentos
              en producciones y/o creación de contenido. Así mismo, si decides
              producir tus rolas con nosotros, mientras estamos trabajando tu
              material inédito, te apoyaremos con la realización de alguna
              LiveSession acústica y/o cover de manera gratuita para que sigas
              generando contenido. Además contamos con planes de pago.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionBS;
