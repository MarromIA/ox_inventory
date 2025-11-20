import React, { useMemo } from 'react';

const colorChannelMixer = (colorChannelA: number, colorChannelB: number, amountToMix: number) => {
  let channelA = colorChannelA * amountToMix;
  let channelB = colorChannelB * (1 - amountToMix);
  return channelA + channelB;
};

const colorMixer = (rgbA: number[], rgbB: number[], amountToMix: number) => {
  let r = colorChannelMixer(rgbA[0], rgbB[0], amountToMix);
  let g = colorChannelMixer(rgbA[1], rgbB[1], amountToMix);
  let b = colorChannelMixer(rgbA[2], rgbB[2], amountToMix);
  return `rgb(${r}, ${g}, ${b})`;
};

const COLORS = {
  primaryColor: [231, 76, 60], // Red
  secondColor: [39, 174, 96], // Green
  accentColor: [211, 84, 0], // Orange
};

const WeightBar: React.FC<{ percent: number; durability?: boolean }> = ({ percent, durability }) => {
  const color = useMemo(
    () =>
      durability
        ? percent < 50
          ? colorMixer(COLORS.accentColor, COLORS.primaryColor, percent / 100)
          : colorMixer(COLORS.secondColor, COLORS.accentColor, percent / 100)
        : percent > 50
        ? colorMixer(COLORS.primaryColor, COLORS.accentColor, percent / 100)
        : colorMixer(COLORS.accentColor, COLORS.secondColor, percent / 50),
    [durability, percent]
  );

  return (
    <div className={durability ? 'durability-bar' : 'weight-bar'}>
      <div
        style={{
          visibility: percent > 0 ? 'visible' : 'hidden',
          // 🔧 SOLO para Weight Bar (vertical): usa height
          // 🔧 Para Durability Bar (horizontal): sigue usando width
          width: durability ? `${percent}%` : '100%',
          height: durability ? '100%' : `${percent}%`,
          backgroundColor: color,
          transition: durability 
            ? `background 0.3s ease, width 0.3s ease` 
            : `background 0.3s ease, height 0.3s ease`,
          borderRadius: durability ? 3 : 2,
        }}
      ></div>
    </div>
  );
};

export default WeightBar;