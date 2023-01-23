import React from "react";
import { GridContainerStyled } from "./GridContainer.styles";
import StudioXS from "@assets/studio-xperimental.jpg";

const GridContainer = () => {
  return (
    <GridContainerStyled>
      <article>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni at
          quos praesentium non repudiandae sit est eligendi similique modi
          molestiae unde voluptas commodi, sunt excepturi accusamus, ex
          distinctio exercitationem impedit culpa accusantium aut? Voluptatum
          reprehenderit, officia voluptate placeat pariatur nostrum ducimus in,
          cumque accusantium, ipsa nihil. Consequatur eligendi voluptate
          exercitationem natus obcaecati ipsam voluptatum maxime repellat autem
          et dolorum at suscipit adipisci, perspiciatis aliquid! Unde culpa
          nulla praesentium numquam cum repellat esse blanditiis sint nobis
          aperiam facilis, molestiae maiores iste aliquid mollitia.
        </p>
        <br />
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem um...</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ullam
          aliquid ut veritatis praesentium optio ratione debitis libero
          voluptates, saepe recusandae beatae quia corporis et voluptatibus
          facilis suscipit laudantium deserunt commodi! Maiores ex a tempore
          voluptate consectetur enim quis laborum quo voluptatibus reiciendis
          alias iusto repellendus aliquid, numquam voluptas fugiat deleniti
          rerum aperiam illum minus illo! Explicabo aliquam, impedit omnis
          maxime ipsum esse, consequatur, blanditiis accusantium molestias
          deleniti pariatur odio. Beatae aut excepturi placeat illum. Quae
          officiis facere reiciendis, est in quaerat ratione velit maxime. Ad
          expedita et laudantium.
        </p>
      </article>
      <img src={StudioXS} alt="Music studio" />
    </GridContainerStyled>
  );
};

export default GridContainer;
