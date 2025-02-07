import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaFileInvoice,
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
  FaTimes,
  FaBars,
  FaHamburger
} from "react-icons/fa";

const Sidebar = ({ scrollToSection, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="sidemenu">
      <button className="menu-btn" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaHamburger style={{ color: "orange" }} />}
      </button>
    </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link
                to="invoicing"
                spy={true}
                smooth={true}
                duration={500}
                className={activeSection === "invoicing" ? "active" : ""}
                onClick={() => {
                  scrollToSection("invoicing");
                  setIsOpen(false); // Close menu on selection
                }}
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
                onClick={() => {
                  scrollToSection("expense");
                  setIsOpen(false);
                }}
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
              onClick={() => scrollToSection("contacts")}
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
              onClick={() => scrollToSection("payments")}

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
              onClick={() => scrollToSection("inventory")}
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
              onClick={() => scrollToSection("banking")}

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
              onClick={() => scrollToSection("currency")}

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
              className={activeSection === "ewaybill" ? "active" : ""}
              onClick={() => scrollToSection("ewaybill")}
            >
              <FaFileInvoiceDollar style={{ fontSize: "24px" }} /> Automatic e-Way Bill
            </Link>
          </li>

          <li>
            <Link
              to="invoicee"
              spy={true}
              smooth={true}
              duration={500}
              className={activeSection === "invoicee" ? "active" : ""}
              onClick={() => scrollToSection("invoicee")}
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
              onClick={() => scrollToSection("accounting")}

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
              onClick={() => scrollToSection("collaborate")}

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
              onClick={() => scrollToSection("dashboard")}

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
              onClick={() => scrollToSection("reports")}

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
              onClick={() => scrollToSection("lock")}

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
              onClick={() => scrollToSection("whatsapp")}

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
              onClick={() => scrollToSection("other")}

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
