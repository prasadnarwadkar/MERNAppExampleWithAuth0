import { React, useState, useEffect } from "react";
import { Table, Container, Row, Col } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';

import Axios from "axios";

const apiUri = process.env.REACT_APP_HOST;
console.log('API uri is: ' + apiUri);

function Hero() {
  
  const [loadingData, setLoadingData] = useState(true);

  const [data, setData] = useState([]);
  const [sendFormOk, setSendFormOk] = useState(true);

  const handleCodeChange = async (e) => {
    const code = e.target.value;
    const system = e.target.parentElement.parentElement[1].value;

    const response = await getDataAsync();
    let found = false;

    for (let i = 0; i < response.length; i++) {
      for (let j = 0; j < response[i].codings.length; j++) {
        if (response[i].codings[j].code === code
          && response[i].codings[j].system === system) {
          found = true;
          break;
        }
      }

      if (found) {
        break;
      }
    }

    if (found) {
      alert(`Code [${code}] and System [${system}] must be unique`);
      setSendFormOk(false);
    }
    else {
      setSendFormOk(true);
    }
  }

  const handleSystemChange = async (e) => {
    const system = e.target.value;
    const code = e.target.parentElement.parentElement[0].value;

    const response = await getDataAsync();
    let found = false;

    for (let i = 0; i < response.length; i++) {
      for (let j = 0; j < response[i].codings.length; j++) {
        if (response[i].codings[j].code === code
          && response[i].codings[j].system === system) {
          found = true;
          break;
        }
      }

      if (found) {
        break;
      }
    }

    if (found) {
      alert(`Code [${code}] and System [${system}] must be unique`);
      setSendFormOk(false);
    }
    else {
      setSendFormOk(true);
    }
  }

  const onSubmit = (e) => {
    setLoadingData(true);

    e.preventDefault();

    if (!sendFormOk) {
      return false;
    }

    // Get the form which is event target.
    const form = e.target;

    let data = JSON.stringify({
      "observation": {
        "id": uuidv4(),
        "code": {
          "coding": [
            {
              "code": form[0].value,
              "system": form[1].value,
              "display": form[2].value
            }
          ]
        }
      }
    });

    Axios.post(apiUri, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      console.log("Added: " + JSON.stringify(response));
      
      Axios
        .get(apiUri)
        .then((response) => {
          setData(response.data);

          setLoadingData(false);
        });
    })
      .catch(function (error) {
        console.error(error);
      });

  }

  async function getDataAsync() {
    return await Axios
      .get(apiUri)
      .then((response) => {
        return response.data;
      });
  }

  useEffect(() => {
    async function fetchData() {
      const response = await getDataAsync();

      setData(response);
      setLoadingData(false);
    }
    fetchData();
  }, [loadingData]);

  return (
    <div className="App">
      {loadingData ? (
        <p>Loading Please wait...</p>
      ) : (
        <><Container><Row><Col className="border" md="8"><h1 className="mb-4">Observations</h1>
          <Table bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>Codings</th>
              </tr>
            </thead>
            <tbody>
              {data.map((listValue) => {
                if (listValue.codings.length > 0) {
                  return (
                    <tr key={listValue.id.toString()}>
                      <td>{listValue.id}</td>
                      <td>
                        <Table bordered>
                          <thead>
                            <tr>
                              <th>System</th>
                              <th>Code</th>
                              <th>Display</th>
                            </tr>
                          </thead>
                          <tbody>
                            {listValue.codings.map((listValue2, index2) => {

                              return (
                                <tr key={index2}>
                                  <td>{listValue2.system}</td>
                                  <td>{listValue2.code}</td>
                                  <td>{listValue2.disp}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </Table>
                      </td>
                    </tr>
                  )
                }
                else {
                  return (
                    <div />
                  )
                }
              })}



            </tbody>

          </Table>
        </Col>
          <Col className="border" md="4">
            <fieldset>
              <legend>Add Coding</legend>

              <form className="container" onSubmit={onSubmit}>
                <label>
                  Code: <input name="code" required onChange={handleCodeChange} />
                </label>
                <hr />
                <label>
                  System: <input name="system" onChange={handleSystemChange} required />
                </label>
                <label>
                  Display: <input name="display" required />
                </label>
                <hr />
                <button className="btn btn-danger" type="reset">Reset form</button>&nbsp;
                <button className="btn btn-primary" type="submit">Submit form</button>
              </form>
            </fieldset>
          </Col>
        </Row>
        </Container>
        </>
      )}


    </div>
  );
}

export default Hero;
