import { useState } from "react";
import { Link } from "@tanstack/react-router";

const projects = [
  {
    id: 1,
    status: 'Ready to Move In',
    statusColor: '#059669',
    statusTextColor: '#ffffff',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgj6ih1W5P65MJsp-Zp0oN2Q8jSudzkiPKMpwRqTom7CR0Zqh6ytqm4z8SDJixDbXJzNVD3_EXz6uqJTlYKK4_1aPebqrg2jcD3iU4tZXKWdB7iuYT2ORHnM0dBsgf_ti_Efqf3F7qamoCBxZizeqqsUF5PHvBIm8J-t1t--pfIXg2xypN2Qt8hsKq5_wT-6yy-RlXAIbU11S1aIrnE4WeIgXHbFcdyY136n7BDkO1KqxJiObbnAYN24h1QNHYFcekuaG0xvunH70',
    developer: 'Tribeca & M3M',
    name: 'Trump Tower (Gurgaon)',
    location: 'Sector 65, Gurgaon',
    tags: ['3 & 4 BHK', '2.83 Acres', '258 Units'],
    price: '₹11.5Cr – ₹22.1Cr',
  },
  {
    id: 2,
    status: 'Under Construction',
    statusColor: '#F59E0B',
    statusTextColor: '#0f172a',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy9lIY-Q_FlWyVxRta-bqQVNM5C9mOruXpPWH6bdkm0C2KAWFHuXCitYulCQUlvaHT7uLBed3UERgiH6L52WtYhFwiwcOItrDPuErt3Z3r8AXebgYIdG2r1RNXIJyY-qmNOlnB_NreQQp-byzXKBKHHkqENNH9pzUf0ipQXi2gZUA1mVpUhKjU0nyGM2MUfNMUqkLPzTOcHBpcerEMBAvz5crrjUFyeFUeNwVz1YbePmwnR-knjPk1h7QRdvYohsd-b_qsFVQ6QTI',
    developer: 'Whiteland Corporation',
    name: 'Whiteland The Aspen Iconic',
    location: 'Sector 76, Gurgaon',
    tags: ['4 BHK Only', '2 Acres', '120 Units'],
    price: '₹7.3Cr – ₹8.2Cr',
  },
  {
    id: 3,
    status: 'Under Construction',
    statusColor: '#F59E0B',
    statusTextColor: '#0f172a',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_c0rDlgxH4R1st573_bhV8KJvU93qnXiGb2zDcHCvGLQYDkr_GHlB_fAOF8mOrkxopyuJMbq82tsH0jY3yL5nKUrbjsa0akjy6HB215x4yM2z0H9-bYl0bltCUBIxBK5fWFvL7wOxGAdk7Cqsf5-P__kmFU2QhtXYCc1PihVnCxzKTWWc1-ZaMqvtAthrkmgPH2I5Oe-iTNexMG-mnVQO7plPl2rovqvV5giiYHt5nbBM7aCD-6FgTyDnJglP8ZmEBAAHrNQIhqk',
    developer: 'TARC Limited',
    name: 'Tarc Ishva',
    location: 'Sector 63A, Gurgaon',
    tags: ['3 & 4 BHK', '9.75 Acres', '513 Units'],
    price: '₹8.4Cr – ₹9.7Cr',
  },
  {
    id: 4,
    status: 'Under Construction',
    statusColor: '#F59E0B',
    statusTextColor: '#0f172a',
    image: 'https://property.p2s.ai/project-images/6/hero.jpg',
    developer: 'Anant Raj Limited',
    name: 'Anant Raj The Estate',
    location: 'Sector 63A, Gurgaon',
    tags: ['4 BHK Only', '5.48 Acres', '248 Units'],
    price: '₹7.8Cr – ₹10.0Cr',
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/directories"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#ffffff',
        border: `1px solid ${hovered ? 'rgba(245,158,11,0.5)' : 'rgba(226,232,240,0.8)'}`,
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: hovered ? '0 10px 25px -5px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div style={{ height: 176, position: 'relative', overflow: 'hidden' }}>
        <img
          src={project.image}
          alt={project.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            background: project.statusColor,
            color: project.statusTextColor,
            padding: '4px 10px',
            fontSize: 9,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            borderRadius: 2,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {project.status}
        </div>
      </div>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', background: '#ffffff' }}>
        <div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 4 }}>{project.developer}</span>
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 700, color: hovered ? '#F59E0B' : '#0F172A', transition: 'color 0.2s', marginBottom: 4 }}>{project.name}</h3>
          <p className="flex items-center gap-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#64748b', fontWeight: 500 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#F59E0B' }}>location_on</span>
            {project.location}
          </p>
          <div className="flex flex-wrap gap-1.5" style={{ marginTop: 8 }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{ background: 'rgba(241,245,249,0.7)', color: '#334155', fontSize: 10, padding: '4px 10px', borderRadius: 4, fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center" style={{ borderTop: '1px solid #f1f5f9', marginTop: 16, paddingTop: 12 }}>
          <div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>Price Range</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800, color: '#0F172A', marginTop: 2, display: 'block' }}>{project.price}</span>
          </div>
          <span className="flex items-center gap-0.5" style={{ color: hovered ? '#d97706' : '#F59E0B', fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif', transition: 'color 0.2s' }}>
            Telemetry
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function TrendingProjects() {
  return (
    <section className="mx-[0px] mt-[0px] mb-[56px] mx-[0px] mt-[0px] mb-[56px]" style={{ paddingBottom: 56, marginBottom: 0 }}>
      <div className="flex flex-row justify-between items-center md:items-baseline gap-4" style={{ marginBottom: 20 }}>
        <div className="flex-1 min-w-0">
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(22px, 4.5vw, 30px)', fontWeight: 700, color: '#0F172A', lineHeight: 1.3, marginBottom: 4 }}>Trending Projects</h2>
          <p className="hidden md:block" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#64748b' }}>Every card is powered by live intelligence — RERA status, builder credibility, actual prices, and risk signals updated continuously.</p>
        </div>
        <a
          href="#"
          className="md:hidden flex items-center gap-1 flex-shrink-0"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 800, color: '#F59E0B', textDecoration: 'none' }}
        >
          View All
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
        </a>
        <Link
          to="/directories"
          className="hidden md:inline-block transition-all"
          style={{
            border: '1px solid #cbd5e1',
            color: '#0F172A',
            padding: '10px 24px',
            borderRadius: 2,
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            background: 'transparent',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#0F172A'; (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#0F172A'; }}
        >
          View All
        </Link>
      </div>

      {/* MOBILE: -mx-4 pulls to edges, pl-4 gives left padding for cards */}
      {/* DESKTOP: md:mx-0 resets, grid takes over, no padding needed */}
      <div
        style={{
          overflowX: 'auto',
          overflowY: 'visible',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        className="-mx-4 md:mx-0 [&::-webkit-scrollbar]:hidden md:overflow-visible"
      >
        <div
          style={{
            display: 'flex',
            gap: 16,
            width: 'max-content',
          }}
          className="pl-4 pr-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:w-auto md:px-0"
        >
          {projects.map((p) => (
            <div
              key={p.id}
              style={{ width: '72vw', maxWidth: 300, flexShrink: 0 }}
              className="snap-start md:w-auto md:max-w-none"
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}