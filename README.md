# ESPAÑOL
## ⚠️ Anuncio

Esta version de `ox_inventory` fue modificada para **lograr amplica compatibilidad entre frameworks**, funcionando sin problemas con **qb-core**, **qbox**, **esx**, **ox_core**, y **nd_core**.

Comenzó como un pequeño proyecto personal para mi servidor, pero decidí darle la compatibilidad a QB que no esta disponible en la version original, este fork esta hecho para ser lo más funcional posible sin alejarse tanto de la versión original de `ox_inventory`.

**Importante:**
La version original de `ox_inventory` fue creada por **Overextended** y sigue bajo su licencia original. Aúnque el repositorio original **ya no es mantenido** por el equipo original de **Overextended** pero si mantenido por **CommunityOX**, más al no ser una versión oficial en caso de problemas evitar comunicarte con ellos ya que estas versiones alternativas están mantenidas por el equipo alterno.

---

### Propósito

El objetivo de este fork es agregar **mejoras a un inventario que yá est totalmente funcional y cambido únicamente la apariencia** para cualquier servidor. Al ser un fork de un proyecto Open-Source, tenemos total confianza que cada comunidad podrá adaptarlo a como guste y de total lugar. esperamos tambien el apoyo colectivo para mejorar este pequeño proyecto.

---

## Diferencias claves con otros

### Compatibilidad

* Compatibilidad completa con **qb-core**.
* Continúa su funcionalidad con **esx**, **ox_core**, **qbox**, y **nd_core**.
* No se perdio ninguna característica de algún framework.

---

### Indicador de Rareza (Opcional)

<img width="325" height="280" alt="image" src="https://github.com/user-attachments/assets/4e3e7c55-81c5-4ad1-9fbe-57513ffcc8e5"/>


<img width="325" height="279" alt="image2" src="https://github.com/user-attachments/assets/ba7befcb-1505-490d-9443-e1ba0e217375" />


<img width="781" height="1079" alt="image3" src="https://github.com/user-attachments/assets/0e43dbfd-16d1-4df2-be3e-487dedeac1a4" />



* Ahora los items pueden mostrar un **ícono de estrella** en la parte izquierda baja con el  `"rarity"` metadata key.
* **Colores base**: 
    `'normal': '#ffffff'`,
    `'comun': '#1eff00'`,
    `'raro': '#0070dd'`,
    `'epico': '#a335ee'`,
    `'legendario': '#ff8000'`,
    `'ancestral': '#e6cc80'`,
    `'encantado': '#ffffff'`,
    `'divino': '#e0c675ff'`,
    `'maldito': '#381818ff'`,

    `'rojo': '#ff0000'`,
    `'rosa': '#ff69b4'`,
    `'oro': '#ffd700'`,
    `'plata': '#c0c0c0'`,
    `'bronze': '#cd7f32'`,
    `'cobre': '#b87333'`,
    `'azul': '#0099ff'`,
    `'verde': '#00ff66'`,
    `'cyan': '#00ffff'`,
    `'magenta': '#ff00ff'`,
    `'amarillo': '#ffff00'`,
    `'naranja': '#ff6600'`,
    `'purpura': '#9900ff'`,
    `'lima': '#99ff00'`,
    `'violeta': '#8a2be2'`,
    `'negro': '#000000'`,
    `'blanco': '#ffffff'`,
* El color `encantado` como rareza trae una animación de ciclo de colores.
* **Soporte de Rareza**: la rareza se define directamente en `data/items.lua` o `data/weapons.lua` para aplicaciones automaticas.
* Tambien puede ser modificada externamente para cada item.
* El lenguaje de la rareza y metadatos debe ser directamente modificado en los archivos de **REACT**, puedes buscarlo directamente con `rarity` en los componentes de inventario y el css.
* Al igual que la estrella, tambien se puede configurar que el marco/borde del item cambie de color, o tambien el fondo de las letras o escoger el que gustes, todo es directamente configurable, solamente modificar el scss con true/false.

### Ajustes para el sistema de rareza
* La rareza como metadato siempre estará activo, en caso no desees utilizarla no usar `rarity = '(rareza)'` en caso de que si se desee utilizar por defecto la estrella permanecer,a si deseas activar o modificar la estrella, el marco o el degradado del texto, eres libre de modificar lo siguiente y tambien buscar los comentarios.

```css
/* ============================================
   COLORES DE RAREZA
   ============================================ */
$rarityNormal: #ffffff;
$rarityComun: #1eff00;
$rarityRaro: #0070dd;
$rarityEpico: #a335ee;
$rarityLegendario: #ff8000;
$rarityAncestral: #e6cc80;
$rarityEncantado: linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #8000ff);
$rarityDivino: #e0c675ff;
$rarityMaldito: #381818ff;
$rarityRojo: #ff0000;
$rarityRosa: #ff69b4;
$rarityOro: #ffd700;
$rarityPlata: #c0c0c0;
$rarityBronce: #cd7f32;
$rarityCobre: #b87333;
$rarityAzul: #0099ff;
$rarityVerde: #00ff66;
$rarityCyan: #00ffff;
$rarityMagenta: #ff00ff;
$rarityAmarillo: #ffff00;
$rarityNaranja: #ff6600;
$rarityPurpura: #9900ff;
$rarityLima: #99ff00;
$rarityVioleta: #8a2be2;
$rarityMaroon: #800000;
$rarityNegro: #000000;
$rarityBlanco: #ffffff;
/* ============================================
   ACTIVAR/DESACTIVAR BORDES DE RAREZA
   ============================================ */
$enable-rarity-borders: true;
$rarity-border-width: 2px;
$rarity-border-style: solid;
/* ============================================
   ACTIVAR/DESACTIVAR DEGRADADO DE LABEL POR RAREZA
   ============================================ */
$enable-rarity-label-gradient: true;
$rarity-label-min-tier: 'epico'; /* Opciones: 'normal', 'comun', 'raro', 'epico', 'legendario', 'ancestral', 'encantado', 'divino', 'maldito' */
$rarity-tiers: (    /* Jerarquía de rarezas (NO MODIFICAR - usado internamente) */
  'normal': 1,
  'comun': 2,
  'raro': 3,
  'epico': 4,
  'legendario': 5,
  'ancestral': 6,
  'divino': 7,
  'maldito': 8,
  'encantado': 9
);
$gradient-top-opacity: 0.3;
$gradient-bottom-opacity: 0.8;

/* ============================================
   BORDES DE RAREZA
   ============================================ */

/* ============================================
   DEGRADADOS DE LABEL POR RAREZA
   ============================================ */

```

#### Ejemplos de uso:
```lua
-- En data/items.lua
['rare_gem'] = {
    label = 'Gema Rara',
    weight = 50,
    rarity = 'raro',  -- Se muestra una estrella azul
}

-- En data/weapons.lua
['WEAPON_LEGENDARY_PISTOL'] = {
    label = 'Pistola Legendaria',
    weight = 1200,
    durability = 0.2,
    ammoname = 'ammo-9',
    rarity = 'legendario',  -- Se muestra una estrella naranja
}

-- Runtime de Metadata
exports.ox_inventory:AddItem(playerId, 'item_name', 1, {
    rarity = 'epic'  -- Añade/agrega el metadato.
})
```

### Adicional

* **Más formatos de imágen** soportados: `.jpg`, `.jpeg`, `.gif`.
* **More hosting sources allowed**, including **img.bb** and **Discord CDN**.

## Agradecimientos Adicionales

Este fork llego gracias a 3 que logre visualizar y crear una idea similar adicionando las novedades de 2 de estos.

El primero es para quien me dio una idea del diseño 
[SoyKrow](github.com/soyKrow/ox_inventory)
El segundo es para la idea de Rarity
[TheOrderFivem](https://github.com/TheOrderFivem/ox_inventory)

## Comentarios Finales

Actualmente el fork que manejo es una evolución de este mismo con diferentes características, pero por decisión personal he decidido no hacerlo público hasta la finalización de la temporada de mi servidor, finalizado este mismo posiblemente lo haga público con todas las características añadidas, como tal no pienso beneficiarme ni generar nada en base a un producto que ya es actualmente gratuito, es posible a futuro usar como base OX_Inventory para rediseñar un nuevo inventario solo haciendo uso de sus exports para mayor compatibilidad con todos los servers existentes, pero todo lo demás será totalmente rediseñado, pero como tal es un plan a futuro que aún no he tomado la decisión si seguirlo o no, pero hasta que eso ocurra estaré con la versión mejorada (solamente UI) de este sistema y con ciertas características extras. Yo sigo agradeciendo al equipo de **CommunityOX** por continuar con el desarrollo y mantenimiento de `ox_inventory` y espero que continue por más tiempo. Ah y también decir que dejen de usar ESX o QBCore, QBOX es la ley.

# ox_inventory

Un sistema de inventario completo para FiveM, implementando ítems, armas, tiendas y más sin depender estrictamente de un framework.

![Downloads](https://img.shields.io/github/downloads/communityox/ox_inventory/total?logo=github)
![Latest Downloads](https://img.shields.io/github/downloads/communityox/ox_inventory/latest/total?logo=github)
![Contributors](https://img.shields.io/github/contributors/communityox/ox_inventory?logo=github)
![Releases](https://img.shields.io/github/v/release/communityox/ox_inventory?logo=github)

---

## 📚 Documentación

https://coxdocs.dev/ox_inventory

---

## 💾 Descarga

https://github.com/TheOrderFivem/ox_inventory/releases/latest/download/ox_inventory.zip

---

## 📺 Guía de instalación

https://www.youtube.com/watch?v=g1_ryUZSOGA

---

## Frameworks compatibles

No garantizamos compatibilidad o soporte para recursos de terceros.

- qb-core  
- esx  
- qbox  
- ox_core  
- nd_core  

---

## ✨ Características

- Validación del lado del servidor para interacciones con ítems, tiendas y stashes.  
- Registro (logging) de eventos importantes como compras, movimientos y creación/eliminación de ítems.  
- Compatibilidad con vehículos propiedad de jugadores, licencias y sistemas de grupos propios de frameworks.  
- Totalmente sincronizado, permitiendo que varios jugadores **accedan al mismo inventario** simultáneamente.

### Ítems

- Los ítems se almacenan por slot con metadata personalizable para soportar ítems únicos.  
- Reemplaza el sistema de armas por defecto, usando armas como ítems.  
- Attachments y sistema de munición, incluyendo tipos especiales de balas.  
- Durabilidad que permite que los ítems se desgasten o se consuman con el tiempo.  
- Sistema interno que facilita efectos seguros al usar ítems.  
- Compatibilidad con registros de ítems de frameworks terceros.

### Tiendas

- Acceso restringido por grupos y licencias.  
- Soporte para diferentes monedas (dinero sucio, fichas de póker, etc.).

### Stashes

- Stashes personales, vinculando un stash a un identificador específico o creando instancias por jugador.  
- Acceso restringido por grupos.  
- Registro de nuevos stashes desde cualquier recurso.  
- Contenedores que permiten acceder a stashes al usar un ítem (como una bolsa de papel o mochila).  
- Acceso a guanteras y maleteros de cualquier vehículo.  
- Generación aleatoria de ítems dentro de contenedores como basureros o vehículos sin dueño.

---

## Copyright

Copyright © 2024 Overextended <https://github.com/overextended>

Este programa es software libre: puedes redistribuirlo y/o modificarlo bajo los términos de la GNU General Public License tal como fue publicada por la Free Software Foundation, ya sea la versión 3 de la Licencia, o (a tu elección) cualquier versión posterior.

Este programa se distribuye con la esperanza de que sea útil, pero SIN NINGUNA GARANTÍA; sin incluso la garantía implícita de COMERCIABILIDAD o IDONEIDAD PARA UN PROPÓSITO EN PARTICULAR. Consulta la Licencia para más detalles.

Deberías haber recibido una copia de la Licencia junto con este programa. Si no, visita <https://www.gnu.org/licenses/>.
