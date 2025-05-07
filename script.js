const catalogo = {
    apple: [
      { nome: "iPhone 15 Pro Max", imagem: "15 pro max 1.webp" },
      
    ],
    samsung: [
      { nome: "Galaxy S25 Ultra", imagem: "samsung 1.webp" },
      
    ],
    xiaomi: [
      { nome: "Xiaomi 14 Ultra", imagem: "xiaomi-14-ultra-1.webp" },
      
    ],
    motorola: [
      { nome: "Moto G84", imagem: "motorola 1.webp" },
      
    ],
    LG: [
      { nome: "LG's", imagem: "LGs 1.jpg" },
      
    ],
    oneplus: [
      { nome: "OnePlus 12", imagem: "onde plus.jpg" },
      
    ]
  };
  
  function mostrarModelos(marca) {
    const modelosDiv = document.getElementById("modelos");
    const modelos = catalogo[marca];
  
    let html = `<h2>Modelos da marca ${marca.charAt(0).toUpperCase() + marca.slice(1)}</h2><ul>`;
    modelos.forEach(modelo => {
      html += `
        <li>
          <img src="${modelo.imagem}" alt="${modelo.nome}" width="200">
          <p>${modelo.nome}</p>
        </li>
      `;
    });
    html += `</ul>`;
  
    modelosDiv.innerHTML = html;
  }
  