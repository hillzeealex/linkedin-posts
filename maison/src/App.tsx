import React from "react";

const listings = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1695924385945-74926dbe7794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    price: "1 250 000 €",
    name: "Appartement Haussmannien · 16ème",
    meta: "4 pièces · 120 m²",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1759724140883-f201a7256e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    price: "3 800 000 €",
    name: "Penthouse avec terrasse · 8ème",
    meta: "6 pièces · 280 m² · Terrasse 80 m²",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1663274158677-c099f41870d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    price: "890 000 €",
    name: "Maison de caractère · Normandie",
    meta: "7 pièces · 320 m² · Parc 2 ha",
  },
];

const stats = [
  { value: "1 200+", label: "Biens vendus" },
  { value: "15 ans", label: "D'expertise" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "4,8 / 5", label: "Note moyenne" },
];

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#FAFAF8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: 80, padding: "0 56px", backgroundColor: "#FAFAF8" }}>
        <span style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", fontWeight: 700, fontSize: 24, color: "#1A1A1A" }}>
          Maison
        </span>
        <nav style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {["Acheter", "Louer", "Estimer", "Agence"].map((item) => (
            <a key={item} href="#" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#888888", textDecoration: "none" }}>
              {item}
            </a>
          ))}
        </nav>
        <button style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#FFFFFF", backgroundColor: "#1A1A1A", border: "none", padding: "12px 24px", cursor: "pointer" }}>
          Prendre contact
        </button>
      </header>

      {/* Hero */}
      <section style={{ display: "flex", alignItems: "center", gap: 64, padding: "0 56px", height: 680, backgroundColor: "#FAFAF8" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32, width: 580 }}>
          <div style={{ display: "inline-flex", padding: "6px 16px", backgroundColor: "#F0EDE8" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500, color: "#888888" }}>
              Immobilier de prestige · Paris & Île-de-France
            </span>
          </div>
          <h1 style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", fontSize: 64, fontWeight: 400, color: "#1A1A1A", letterSpacing: -2, lineHeight: 1.1, width: 560 }}>
            Trouvez le bien qui vous ressemble
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: "#666666", lineHeight: 1.6, width: 480 }}>
            Des propriétés d'exception sélectionnées par nos experts. Accompagnement personnalisé de la recherche à la signature.
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <button style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 500, color: "#FFFFFF", backgroundColor: "#1A1A1A", border: "none", padding: "16px 32px", cursor: "pointer" }}>
              Explorer les biens
            </button>
            <button style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 500, color: "#1A1A1A", backgroundColor: "transparent", border: "1px solid #1A1A1A", padding: "16px 32px", cursor: "pointer" }}>
              Estimer mon bien
            </button>
          </div>
        </div>
        <div style={{ flex: 1, height: 560, overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1713192706955-6ef5c71811bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Propriété de prestige"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Listings */}
      <section style={{ padding: "80px 56px", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column", gap: 48 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", fontSize: 36, fontWeight: 400, color: "#1A1A1A" }}>
            Sélection du moment
          </h2>
          <a href="#" style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#888888", textDecoration: "none" }}>
            Voir tous les biens →
          </a>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {listings.map((listing) => (
            <div key={listing.id} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ height: 260, overflow: "hidden" }}>
                <img src={listing.image} alt={listing.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 20 }}>
                <span style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", fontSize: 24, fontWeight: 400, color: "#1A1A1A" }}>
                  {listing.price}
                </span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, color: "#1A1A1A" }}>
                  {listing.name}
                </span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888888" }}>
                  {listing.meta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "60px 56px", backgroundColor: "#1A1A1A" }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", fontSize: 48, fontWeight: 400, color: "#FFFFFF", letterSpacing: -2 }}>
              {stat.value}
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888888" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 64, padding: 56, backgroundColor: "#FAFAF8" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 320 }}>
          <span style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", fontWeight: 700, fontSize: 24, color: "#1A1A1A" }}>
            Maison
          </span>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#888888", lineHeight: 1.6, width: 280 }}>
            L'immobilier de prestige, avec l'attention qu'il mérite.
          </p>
        </div>
        {[
          { title: "Acheter", links: ["Appartements", "Maisons", "Biens de prestige"] },
          { title: "Agence", links: ["Notre équipe", "Contact", "Mentions légales"] },
        ].map((col) => (
          <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#1A1A1A" }}>
              {col.title}
            </span>
            {col.links.map((link) => (
              <a key={link} href="#" style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888888", textDecoration: "none" }}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </footer>
    </div>
  );
}
