import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  workExperience,
  skills,
  services,
} from "../../content_option";

export const Services = () => {
  const handleClick = () => {
    alert("information is being updated, kindly check later");
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        {/* <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet> */}
        {/* <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col> */}
        {/* </Row> */}
        {/* <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row> */}
        {/* <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {workExperience.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row> */}
        {/* <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row> */}











        <Row className="sec_sp">
          <Col lang="5">
            <h1 className="color_sec py-4">My Services</h1>
            <h5>Hey there! Are you looking for services to enhance your online presence, create stunning visual designs, or analyze your business data? Whether you need a user-friendly website, captivating job posters and logos, or insightful data analysis, I'm here to help. Let's discuss how we can elevate your business together!</h5>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {


              return (
                <>
                
          
                <div className="service" key={i}>
                 
                  <h2 className="service__title">{data.title}</h2>
                  <h4 className="service_desc">{data.description}</h4>
                  <img src={data.img} alt="" />
                  
                </div>
                {/* <button onClick={() => alert("Button is currently disabled for maintenance")}>Inquire More</button> */}
                <button onClick={handleClick}>Inquire More</button>

                {/* onClick={() => alert("This project is in finalization stage. Kindly Check later")}
                 */}
                </>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
