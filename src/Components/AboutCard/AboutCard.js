import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My Self <span className="purple">TSP ABHISHEK </span>
             I am a Fresh Graduate Engineer from <span className="purple"> Bhopal , India.</span>
            <br />
            
            <br />I have completed Bachelor's degree in Computer Science from Vellore Institute of Technology , Bhopal<br /> <br />
           <br />

            I have studied basic software engineering subjects like DSA,DBMS,Adv Java programing etc. Also done Crash Course on Python By google , C for Everyone: Programming Fundamentals By University of California Santa Cruz , Tools for Data Science By IBM .
            <br />
           <br />

            <br />
            ⚡ Apart from this, Iam a FIDE <span className="purple">Nation Player of chess </span> and having 2000+ rating in lichess.com .
 
          </p>
          
              </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;