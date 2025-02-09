import React from "react";
import { Link } from "react-scroll";
import { FaFileInvoice, 
  FaMoneyBillWave,
   FaAddressBook,
   FaCreditCard,
   FaWarehouse,
   FaPiggyBank,
   FaGlobe,
   FaFileInvoiceDollar,
   FaChartBar,
   FaLock,
   FaRegChartBar,
   FaLockOpen,
   FaWhatsapp,
   FaEllipsisH,
   } from "react-icons/fa";

const Sidebar = ({ activeSection }) => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link
              to="invoicing"
              spy={true}
              smooth={true}
              duration={500}
              className={activeSection === "invoicing" ? "active" : ""}
              aria-selected={activeSection === "invoicing"} 
            >
              <FaFileInvoice /> Invoicing
            </Link>
          </li>
          <li>
            <Link
              to="expense"
              spy={true}
              smooth={true}
              duration={500}
              className={activeSection === "expense" ? "active" : ""}
              aria-selected={activeSection === "expense"} 
            >
              <FaMoneyBillWave /> Expense / Income
            </Link>
          </li>
          <li>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              duration={500}
              className={activeSection === "contacts" ? "active" : ""}
              aria-selected={activeSection === "contacts"} 
            >
              <FaAddressBook /> Contacts
            </Link>
          </li>
          <li>
              <Link
                to="payments"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "payments" ? "active" : ""}
                aria-selected={activeSection === "payments"} 
              >
                <FaCreditCard style={{ fontSize: "24px" }} /> Payments
              </Link>
            </li>

            <li>
              <Link
                to="inventory"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "inventory" ? "active" : ""}
                aria-selected={activeSection === "inventory"} 
              >
                <FaWarehouse style={{ fontSize: "24px" }} /> Inventory
              </Link>
            </li>

            <li>
              <Link
                to="banking"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "banking" ? "active" : ""}
                aria-selected={activeSection === "banking"} 


              >
                <FaPiggyBank style={{ fontSize: "24px" }} /> Banking
              </Link>
            </li>

            <li>
              <Link
                to="currency"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "currency" ? "active" : ""}
                aria-selected={activeSection === "currency"} 


              >
                <FaGlobe style={{ fontSize: "24px" }} /> Multi Currency
              </Link>
            </li>
            <li>
              <Link
                to="automatic-ewaybill"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "automatic-ewaybill" ? "active" : ""}
                aria-selected={activeSection === "automatic-ewaybill"} 

              >
                <FaFileInvoiceDollar style={{ fontSize: "24px" }} /> Automatic e-Way Bill
              </Link>
            </li>

            <li>
              <Link
                to="automatic-einvoice"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "automatic-einvoice" ? "active" : ""}
                aria-selected={activeSection === "automatic-einvoice"} 

              >
                <FaFileInvoice style={{ fontSize: "24px" }} /> Automatic E-Invoice
              </Link>
            </li>

            <li>
              <Link
                to="accounting"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "accounting" ? "active" : ""}
                aria-selected={activeSection === "accounting"} 


              >
                <FaChartBar style={{ fontSize: "24px" }} /> Complete accounting
              </Link>
            </li>

            <li>
              <Link
                to="collaborate"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "collaborate" ? "active" : ""}
                aria-selected={activeSection === "collaborate"} 


              >
                <FaLock style={{ fontSize: "24px" }} /> Collaborate
              </Link>
            </li>

            <li>
              <Link
                to="dashboard"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "dashboard" ? "active" : ""}
                aria-selected={activeSection === "dashboard"} 

              >
                <FaRegChartBar style={{ fontSize: "24px" }} /> Dashboard 
              </Link>
            </li>

            <li>
              <Link
                to="reports"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "reports" ? "active" : ""}
                aria-selected={activeSection === "reports"} 


              >
                <FaChartBar style={{ fontSize: "24px" }} /> Reports
              </Link>
            </li>

            <li>
              <Link
                to="lock"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "lock" ? "active" : ""}
                aria-selected={activeSection === "lock"} 
                


              >
                <FaLockOpen style={{ fontSize: "24px" }} /> Lock Transaction
              </Link>
            </li>

            <li>
              <Link
                to="whatsapp"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "whatsapp" ? "active" : ""}
                aria-selected={activeSection === "whatsapp"} 


              >
                <FaWhatsapp style={{ fontSize: "24px" }} /> WhatsApp
              </Link>
            </li>

            <li>
              <Link
                to="other"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "other" ? "active" : ""}
                aria-selected={activeSection === "other"} 


              >
                <FaEllipsisH style={{ fontSize: "24px" }} /> Other
              </Link>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
