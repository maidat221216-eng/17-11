const Trang2 = () => {
  const socialLinks = [
    {
      id: 1,
      name: "Instagram",
      url: "https://www.instagram.com/darkmyy_/",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      color: "#E1306C", // màu đặc trưng Instagram
    },
    {
      id: 2,
      name: "TikTok",
      url: "https://www.tiktok.com/@thdat.at",
      img: "https://upload.wikimedia.org/wikipedia/en/6/69/TikTok_logo.png",
      color: "#000000", // màu TikTok
    },
    {
      id: 3,
      name: "Facebook",
      url: "https://www.facebook.com/cc.thanhdat?locale=vi_VN",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      color: "#1877F2", // màu Facebook
    },
  ];

  return (
    <div
      className="page-container"
      style={{ paddingTop: "40px", paddingBottom: "40px" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "300px",
              border: `2px solid ${social.color}`,
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              textDecoration: "none",
              color: social.color,
              fontWeight: "bold",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}
          >
            <img
              src={social.img}
              alt={social.name}
              style={{
                height: "140px",
                objectFit: "contain",
                borderRadius: "6px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ margin: "0", fontSize: "20px" }}>{social.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Trang2;
