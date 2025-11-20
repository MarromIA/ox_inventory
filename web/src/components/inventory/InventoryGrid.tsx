import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Inventory } from '../../typings';
import WeightBar from '../utils/WeightBar';
import InventorySlot from './InventorySlot';
import { getTotalWeight } from '../../helpers';
import { useAppSelector } from '../../store';
import { useIntersection } from '../../hooks/useIntersection';
import bagIcon from '../../assets/bag.png';
import weightIcon from '../../assets/weight.png';
import walletIcon from '../../assets/wallet.png';
const PAGE_SIZE = 30;

const InventoryGrid: React.FC<{ inventory: Inventory }> = ({ inventory }) => {
  const weight = useMemo(
    () => (inventory.maxWeight !== undefined ? Math.floor(getTotalWeight(inventory.items) * 1000) / 1000 : 0),
    [inventory.maxWeight, inventory.items]
  );

  const [page, setPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, entry } = useIntersection({ threshold: 0.5 });
  const isBusy = useAppSelector((state) => state.inventory.isBusy);

  useEffect(() => {
    if (entry && entry.isIntersecting) {
      setPage((prev) => ++prev);
    }
  }, [entry]);

  const isPlayerInventory = inventory.type === 'player';

  const hotslots = useMemo(() => {
    if (!isPlayerInventory) return [];
    
    const slots = inventory.items.slice(0, 5);
    while (slots.length < 5) {
      slots.push({ slot: slots.length + 1 });
    }
    return slots;
  }, [inventory.items, isPlayerInventory]);

  const regularSlots = useMemo(() => 
    isPlayerInventory ? inventory.items.slice(5) : inventory.items, 
    [inventory.items, isPlayerInventory]
  );

  return (
    <>
      <div className="inventory-grid-header-wrapper">
        <div className="label-container">
          <img src={bagIcon} alt="Inventory" />
          <p>{inventory.label}</p>
        </div>
        {inventory.maxWeight && (
          <div className="weight-container">
            <img src={weightIcon} alt="Weight" />
            <p>
              {weight / 1000}/{inventory.maxWeight / 1000}kg
            </p>
          </div>
        )}
      </div>
      {/**/}
      
      {/**/}
      {isPlayerInventory && (
        <div className="inventory-hotslots-wrapper">
          <div className="inventory-hotslots-title-container">
            <img src={walletIcon} alt="Pocket" className="inventory-hotslots-icon" />
            <div className="inventory-hotslots-title">BOLSILLO</div>
          </div>
          <div className="inventory-hotslots-container">
            {hotslots.map((item, index) => (
              <InventorySlot
                key={`hotslot-${inventory.type}-${inventory.id}-${item.slot}`}
                item={item}
                ref={index === hotslots.length - 1 ? ref : null}
                inventoryType={inventory.type}
                inventoryGroups={inventory.groups}
                inventoryId={inventory.id}
              />
            ))}
          </div>
        </div>
      )}
      {/**/}
      <div className="inventory-grid-wrapper">
        <div className="inventory-grid-container" ref={containerRef}>
          {regularSlots.slice(0, (page + 1) * PAGE_SIZE).map((item, index) => (
            <InventorySlot
              key={`${inventory.type}-${inventory.id}-${item.slot}`}
              item={item}
              ref={index === regularSlots.slice(0, (page + 1) * PAGE_SIZE).length - 1 ? ref : null}
              inventoryType={inventory.type}
              inventoryGroups={inventory.groups}
              inventoryId={inventory.id}
            />
          ))}
        </div>
        {/**/}
        {inventory.maxWeight && (
          <div className="inventory-weightbar-vertical">
            <WeightBar percent={inventory.maxWeight ? (weight / inventory.maxWeight) * 100 : 0} />
          </div>
        )}
      </div>
    </>
  );
};

export default InventoryGrid;