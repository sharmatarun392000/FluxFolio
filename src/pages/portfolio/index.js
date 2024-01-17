import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, portfoliodata } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
        </Row>
        <Row style={{paddingBottom:'60px'}}>
        <Col>
        <h4>Techncial Skills</h4>
        <hr className="t_border my-4 ml-0 text-left" />
        <div className="skills"> 
        {portfoliodata.map((data,i)=>{
          return(
            <>
                <div key={i} style={{margin:'20px'}}>
                <img src={data.img} height='80px' style={{borderRadius:'25px'}} alt="" />
                <div style={{margin:'5px', textAlign:'center'}}>
                  {data.text}
                </div>
                </div>
            </>
          );
        })}
      </div>
      </Col>
        <Col>
        <h4>Projects</h4>
        <hr className="t_border my-4 ml-0 text-left" />
        <div className="projectitems">
          {dataportfolio.map((data, i) => {
            return (
              <>
              <div key={i} style={{width:'250px',height:'200px',marginTop:'10px'}} >
                <img src={data.img} height='150px' width='250px' style={{border:'1px solid black', borderRadius:'5px'}} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a style={{color:'white', border:'1px solid white', padding:'4px', borderRadius:'5px'}} href={data.link}> View Project </a>
                </div>
                <div className="name_project" style={{height:'40px'}} > 
              <h6>{data.projectname}</h6>
              </div>
              </div>
              </>
            );
          })}
        </div>
        </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
