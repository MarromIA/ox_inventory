import React, { useState } from 'react';
import { getItemUrl, isSlotWithItem } from '../../helpers';
import useNuiEvent from '../../hooks/useNuiEvent';
import { Items } from '../../store/items';
import WeightBar from '../utils/WeightBar';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';
import { SlotWithItem } from '../../typings';
import SlideUp from '../utils/transitions/SlideUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const InventoryHotbar: React.FC = () => {
  const [hotbarVisible, setHotbarVisible] = useState(false);
  const items = useAppSelector(selectLeftInventory).items.slice(0, 5);

  const getRarityColor = (item: any) => {
    if (!isSlotWithItem(item) || !item.metadata?.rarity) return null;

    const rarity = String(item.metadata.rarity).toLowerCase();
    const rarityColors: { [key: string]: string } = {
      // Rarezas
      'normal': '#ffffff',
      'comun': '#1eff00',
      'raro': '#0070dd',
      'epico': '#a335ee',
      'legendario': '#ff8000',
      'ancestral': '#e6cc80',
      'encantado': '#ffffff',
      'divino': '#e0c675ff',
      'maldito': '#381818ff',
      // Colores
      'rojo': '#ff0000',
      'rosa': '#ff69b4',
      'oro': '#ffd700',
      'plata': '#c0c0c0',
      'bronze': '#cd7f32',
      'cobre': '#b87333',
      'azul': '#0099ff',
      'verde': '#00ff66',
      'cyan': '#00ffff',
      'magenta': '#ff00ff',
      'amarillo': '#ffff00',
      'naranja': '#ff6600',
      'purpura': '#9900ff',
      'lima': '#99ff00',
      'violeta': '#8a2be2',
      'negro': '#000000',
      'blanco': '#ffffff',
    };

    return rarityColors[rarity] || null;
  };

  const [handle, setHandle] = useState<NodeJS.Timeout>();
  useNuiEvent('toggleHotbar', () => {
    if (hotbarVisible) {
      setHotbarVisible(false);
    } else {
      if (handle) clearTimeout(handle);
      setHotbarVisible(true);
      setHandle(setTimeout(() => setHotbarVisible(false), 3000));
    }
  });

  return (
    <SlideUp in={hotbarVisible}>
      <div className="hotbar-container">
        {items.map((item) => {
          const rarityColor = getRarityColor(item);
          return (
            <div
              className="hotbar-item-slot"
              style={{
                backgroundImage: `url(${item?.name ? getItemUrl(item as SlotWithItem) : 'none'}`,
              }}
              key={`hotbar-${item.slot}`}
            >
            {isSlotWithItem(item) && (
              <div className="item-slot-wrapper">
                <div className="hotbar-slot-header-wrapper">
                  <div className="inventory-slot-number">{item.slot}</div>
                  <div className="item-slot-info-wrapper">
                    <p>
                      {item.weight > 0
                        ? item.weight >= 1000
                          ? `${(item.weight / 1000).toLocaleString('en-us', {
                              minimumFractionDigits: 2,
                            })}kg `
                          : `${item.weight.toLocaleString('en-us', {
                              minimumFractionDigits: 0,
                            })}g `
                        : ''}
                    </p>
                    <p>{item.count ? item.count.toLocaleString('en-us') + `x` : ''}</p>
                  </div>
                </div>
                <div>
                  {item?.durability !== undefined && <WeightBar percent={item.durability} durability />}
                  {/**/}
                  {rarityColor && (
                    <div className="rarity-star-wrapper">
                      <FontAwesomeIcon
                        icon={faStar}
                        className={`rarity-star ${item.metadata?.rarity === 'encantado' ? 'rarity-star-encantado' : ''}`}
                        style={{
                          color: item.metadata?.rarity === 'encantado' ? undefined : rarityColor,
                          filter: `drop-shadow(0 0 3px ${rarityColor})`
                        }}
                      />
                    </div>
                  )}
                  <div className="inventory-slot-label-box">
                    <div className="inventory-slot-label-text">
                      {item.metadata?.label ? item.metadata.label : Items[item.name]?.label || item.name}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )})}
      </div>
    </SlideUp>
  );
};

export default InventoryHotbar;
