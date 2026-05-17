'use client';

import { clients, invoices, products } from '@/lib/data';
import { BarChart3, FileDown, MessageCircle, Package, Printer, Search, ShoppingCart, UserRound } from 'lucide-react';

const money = (value: number) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value);

export default function HomePage() {
  const totalDebt = clients.reduce((sum, client) => sum + client.debt, 0);
  const totalCharged = clients.reduce((sum, client) => sum + client.charged, 0);
  const monthlyTotal = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const whatsappMessage = encodeURIComponent('Hola EKD, quiero hacer un pedido de accesorios LED.');

  return (
    <main>
      <header className="topbar">
        <div className="logo">EKD<span>HUB</span></div>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#admin">Panel</a>
          <a href="#boletas">Boletas</a>
          <a href="#planes">Planes</a>
        </nav>
        <div className="actions">
          <Search size={23} />
          <ShoppingCart size={23} />
          <span className="pill"><UserRound size={17} /> Mi cuenta</span>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="tag">ACCESORIOS LED DE ALTA CALIDAD</div>
        <h1>Ilumina tu camino. Eleva tu estilo.</h1>
        <p>Vendé productos, gestioná stock, generá boletas y controlá cuánto te deben desde un solo panel profesional.</p>
        <div className="buttons">
          <a className="btn dark" href="#catalogo">Ver catálogo →</a>
          <a className="btn green" href={`https://wa.me/5491170663315?text=${whatsappMessage}`}> <MessageCircle size={19} /> Pedir por WhatsApp</a>
        </div>
        <div className="hero-product">🔦</div>
        <div className="offer"><small>OFERTA DEL MES</small><br /><b>15% OFF</b><br /><span>en barras LED</span></div>
      </section>

      <section className="trust">
        <div>🏷️ Precios mayoristas<small>Descuentos exclusivos</small></div>
        <div>🛡️ Compra segura<small>Datos protegidos</small></div>
        <div>💳 Crédito disponible<small>Cuenta corriente</small></div>
        <div>🧾 Facturación fácil<small>PDF, impresión y WhatsApp</small></div>
        <div>🎧 Soporte rápido<small>Atención personalizada</small></div>
      </section>

      <section id="catalogo" className="section">
        <div className="section-head"><h2>Categorías</h2><b>Ver todas →</b></div>
        <div className="grid categories">
          {['Cree LED', 'Barras LED', 'Lámparas', 'Accesorios motos', 'Universal'].map((cat, i) => <div className="cat" key={cat}><span>{cat}</span><span className="icon">{['🔦','▰','💡','🏍️','⚙️'][i]}</span></div>)}
        </div>
      </section>

      <section className="section">
        <div className="section-head"><h2>Productos destacados</h2><b>Precios minorista / mayorista</b></div>
        <div className="grid products">
          {products.map((product) => (
            <article className="product" key={product.id}>
              <div className="pic">{product.image}</div>
              <h3>{product.name}</h3>
              <div className="price">{money(product.retail)}</div>
              <small>Mayorista: <b>{money(product.wholesale)}</b></small><br />
              <small>Stock: {product.stock} unidades</small>
              <button className="add">Agregar</button>
            </article>
          ))}
        </div>
      </section>

      <section id="admin" className="section">
        <div className="section-head"><h2>Panel administrativo</h2><b>Resumen del mes</b></div>
        <div className="admin-shell">
          <aside className="sidebar">
            <a className="active">Dashboard</a><a>Productos</a><a>Ventas</a><a>Clientes</a><a>Boletas</a><a>Stock</a><a>Reportes</a>
          </aside>
          <div className="grid dashboard">
            <div className="panel">
              <div className="stats">
                <div className="stat">Vendido del mes<strong>{money(monthlyTotal)}</strong><small className="positive">↑ 18%</small></div>
                <div className="stat">Cobrado total<strong>{money(totalCharged)}</strong><small className="positive">↑ 12%</small></div>
                <div className="stat">Total adeudado<strong>{money(totalDebt)}</strong><small className="negative">Revisar</small></div>
                <div className="stat">Stock total<strong>{products.reduce((s,p)=>s+p.stock,0)}</strong><small>unidades</small></div>
              </div>
              <div className="invoice-list">
                <h3>Detalle de deudas</h3>
                <div className="invoice-row"><span>Fecha</span><span>Boleta</span><span>Cliente</span><span>Monto</span></div>
                {invoices.filter(i => i.status === 'Debe').map((invoice) => (
                  <div className="invoice-row" key={invoice.id}><span>{invoice.date}</span><span>{invoice.id}</span><span>{invoice.client}</span><span>{money(invoice.amount)}</span></div>
                ))}
              </div>
            </div>
            <div id="boletas" className="panel">
              <h3>Boletas editables</h3>
              <p>Generá boletas con productos, precio mayorista/minorista automático, estado de pago y reposición de stock si se cancela.</p>
              <button className="btn dark"><FileDown size={18}/> Descargar PDF</button>{' '}
              <button className="btn green"><Printer size={18}/> Imprimir</button>
              <h3>WhatsApp directo</h3>
              <p>Enviar resumen de boleta, monto y link de pago al cliente con un clic.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="planes" className="section">
        <div className="section-head"><h2>Planes para monetizar</h2><b>Modelo rentable</b></div>
        <div className="grid plans">
          <article className="plan">
            <h3>Básico</h3><div className="monthly">$29.000 <small>/mes</small></div>
            <ul><li>Hasta 200 productos</li><li>Gestión básica</li><li>1 usuario</li><li>Soporte estándar</li></ul>
            <button className="btn dark">Comenzar</button>
          </article>
          <article className="plan premium">
            <span className="badge">MÁS POPULAR</span>
            <h3>Premium</h3><div className="monthly">$59.000 <small>/mes</small></div>
            <ul><li>Productos ilimitados</li><li>Estadísticas avanzadas</li><li>WhatsApp automático</li><li>Reportes y exportaciones</li><li>Usuarios ilimitados</li></ul>
            <button className="btn dark">Comenzar</button>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div><div className="logo">EKD<span>HUB</span></div><p>Accesorios LED de alta calidad para motos y vehículos. Envíos a todo el país.</p></div>
        <div><h4>Enlaces</h4><a>Inicio</a><a>Catálogo</a><a>Mayorista</a></div>
        <div><h4>Ayuda</h4><a>Preguntas frecuentes</a><a>Envíos</a><a>Términos</a></div>
        <div><h4>Contacto</h4><a>WhatsApp: 1170663315</a><a>Instagram: EKD_AUTO_LIGHTS</a></div>
      </footer>
      <a className="floating-wa" href={`https://wa.me/5491170663315?text=${whatsappMessage}`}>☘</a>
    </main>
  );
}
