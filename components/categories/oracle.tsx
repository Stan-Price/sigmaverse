import React from 'react';

export default function Oracle({ data, filter }: any) {
  const oracle = data.filter((element: any) => element.category == 'oracle');
  if ((oracle.length != 0 && filter == 'Oracle') || (oracle.length != 0 && filter == 'All')) {
    return (
      <div className="dapps__content">
        <div className="dapps__title">Oracles</div>
        <div className="dapps__container">
          {oracle.map(({ logo, preview, name, description, website }: any) => (
            <a key={website} href={website} target="_blank" className="dapps-card">
              <img src={preview} alt={`${name} preview`} className="dapps-card__preview" />
              <div className="dapps-card__content">
                <div className="dapps-card__header">
                  <img src={logo} alt={`${name} logotype`} className="dapps-card__logotype" />{' '}
                  {name}
                </div>
                <p className="dapps-card__description">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  } else return null;
}
