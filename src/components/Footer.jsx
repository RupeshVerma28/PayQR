export default function Footer() {
  return (
    <footer
      className="py-4"
      style={{ backgroundColor: "#181818", borderTop: "1px solid #282828" }}
    >
      <div className="container text-center">
        <p className="text-secondary mb-1">Built with ❤️ by Rupesh Verma</p>
        <p className="text-secondary small">
          © {new Date().getFullYear()} PayfillQR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
