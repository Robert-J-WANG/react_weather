type Props = {};

export default function Weather({}: Props) {
  const flexCenter = "d-flex justify-content-center align-items-center";
  return (
    <>
      <main
        className={flexCenter}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className={flexCenter}
          style={{
            width: "50vw",
            height: "50vh",
            background: "rgba(255, 255, 255, 0.24)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            backdropFilter: "blur(2.3px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          heloo
        </div>
      </main>
    </>
  );
}
