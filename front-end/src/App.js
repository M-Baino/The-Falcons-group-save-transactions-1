import React, { Component } from 'react';
import DashboardPage from "./components/dashboard/DashboardPage"
class App extends Component {
  state = {
    // Dummy Data
    users:
      [
        {
          id: 1, firstName: "Mohammad", secondName: "Yousef", middleName: "Samih", lastName: "Albitar",
          phoneNumbers: ["077777777777", "077777777855"],
          email: "mohammad@example.com", password: "12345687@as",
          roles : "admin",
          uploadID: "ID.pdf"
        },
        {
          id: 2, firstName: "assem", secondName: "assem", middleName: "assem", lastName: "assem",
          phoneNumbers: ["077777777777", "077777777855"],
          email: "assem@example.com", password: "12345687@as",
          roles : "user",
          uploadID: "../Copy Of Identifications/dummy ID.pdf"

        }
      ],
    vehicleINFO:
      [
        {
          id: 1, make: "Toyota", model: "Camry", licensePlate: "10-135165", year: 1995,
          vinNumber: "15632154", engine: "1500cc", uploadRegId: "registrationID.pdf",
          ownerTransactionKey:"mohammad@example.com",
          additionalINFO: [{
            buyerKey: "buyer@example.com", paymentMethode:
              { both: 0, cash: "2000$", traditionKey: null },
            imagesPaths: [],
            //Path For Dummy pdf File
            authorizeForms: ["../Authorize Froms/dummy buyer Form.pdf", "../Authorize Froms/sellerForm.pdf"],
            status: {
              initialAccept: false, finalAccept: false
            }

          }

          ]

        },
        {
          id: 2, make: "Honda", model: "civic", licensePlate: "10-135165", year: 2005,
          vinNumber: "15632154", engine: "1500cc", uploadRegId: "registrationID.pdf",
          ownerTransactionKey:"mohammad@example.com",
          additionalINFO: [{
            buyerKey: "buyer2@example.com", paymentMethode:
              { both: 0, cash: "2000$", traditionKey: null },
            imagesPaths: [],
            //Path For Dummy pdf File
            authorizeForms: ["../Authorize Froms/dummy buyer Form.pdf", "../Authorize Froms/sellerForm.pdf"],
            status: {
              initialAccept: false, finalAccept: false
            }

          }

          ]

        }

      ]
  }
  render() {
    return (<>
      {/* <div> textInComponent </div> */}
        <DashboardPage  userInfo={this.state.users} vehicleInfo={this.state.vehicleINFO}></DashboardPage>
      </>
    );
  }
}
export default App;
