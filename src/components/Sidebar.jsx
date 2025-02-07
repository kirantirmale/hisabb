import React from "react";
import { Link } from "react-scroll";
import {
  FaFileInvoice,
  FaMoneyBillWave,
  FaAddressBook,
  FaCreditCard,
  FaWarehouse,
  FaPiggyBank,
  FaGlobe,
  FaChartBar,
  FaLock,
  FaWhatsapp,
  FaEllipsisH,
  FaFileInvoiceDollar,
} from "react-icons/fa";

const Sidebar = ({ handleSetActive, scrollToSection }) => {


  return (
    <>
    <div className="sidebar">
      <nav>

        <ul>
          <li>
            <Link
              to="invoicing"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive("invoicing")}
              onClick={() => scrollToSection("invoicing")}
              activeClass="active"
              style={{
                cursor:"pointer",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaFileInvoice style={{ fontSize: "24px" }} /> Invoicing
            </Link>
          </li>
          <li>
            <Link
              to="expense"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive("expense")}
              onClick={() => scrollToSection("expense")}
              activeClass="active"
              style={{
                cursor:"pointer",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaMoneyBillWave style={{ fontSize: "24px" }} /> Expense / Income
            </Link>
          </li>
          <li>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive("contacts")}
              onClick={() => scrollToSection("contacts")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
            >
              <FaAddressBook style={{ fontSize: "24px" }} /> Contacts
            </Link>
          </li>
          <li>
            <Link
              to="payments"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive("payments")}
              onClick={() => scrollToSection("payments")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
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
              onSetActive={() => handleSetActive("inventory")}
              onClick={() => scrollToSection("inventory")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
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
              onSetActive={() => handleSetActive("banking")}
              onClick={() => scrollToSection("banking")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
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
              onSetActive={() => handleSetActive("currency")}
              onClick={() => scrollToSection("currency")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
            >
              <FaGlobe style={{ fontSize: "24px" }} /> Multi Currency
            </Link>
          </li>

          <li>
            <Link
              to="ewaybill"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive("ewaybill")}
              onClick={() => scrollToSection("ewaybill")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
            >
              <FaFileInvoiceDollar style={{ fontSize: "24px" }} /> Automatic e-Way Bill
            </Link>
          </li>
          <li>
            <Link
              to="einvoice"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive("einvoice")}
              onClick={() => scrollToSection("einvoice")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
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
              onSetActive={() => handleSetActive("accounting")}
              onClick={() => scrollToSection("accounting")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
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
              onSetActive={() => handleSetActive("collaborate")}
              onClick={() => scrollToSection("collaborate")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
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
              onSetActive={() => handleSetActive("dashboard")}
              onClick={() => scrollToSection("dashboard")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
            >
              <FaChartBar style={{ fontSize: "24px" }} /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="reports"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive("reports")}
              onClick={() => scrollToSection("reports")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
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
              onSetActive={() => handleSetActive("lock")}
              onClick={() => scrollToSection("lock")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
            >
              <FaLock style={{ fontSize: "24px" }} /> Lock Transaction
            </Link>
          </li>
          <li>
            <Link
              to="whatsapp"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive("whatsapp")}
              onClick={() => scrollToSection("whatsapp")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
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
              onSetActive={() => handleSetActive("other")}
              onClick={() => scrollToSection("other")}
              activeClass="active"
              style={{
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor:"pointer",

              }}
            >
              <FaEllipsisH style={{ fontSize: "24px" }} /> Other
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Sidebar;
