import React from 'react';
import './App.css';
import { Card } from './card';
import { data } from './data';

export default function Home() {
  return (
    <>
      <div className='container'>
        <div className='inner'>
          <h1>
            Lend into <br />
            <span>High Yield Generating,</span> <br />
            sustainable Real world assets
          </h1>

          <p className='text-red-400'>
            Get access to secured, private credit opportunities from emerging markets using your Crypto Stables.
            Generate Real world yields without worrying about market volatility.
          </p>

          <div className='inner2'>
            <div className='numbers'>
              <h1>01</h1>
              <p>Active <br /> Pools</p>
            </div>

            <div className='numbers'>
              <h1>18%</h1>
              <p>Average <br /> APR</p>
            </div>
          </div>
        </div>
        <div>
          <img className='image' src="/image/Homeimage.png" alt="Home" />
        </div>
      </div>

      <div className='outer'>
        <div className='pools'>
          <h3>All Pools</h3>
          <h3>Open Pools</h3>
          <h3>Closed Pools</h3>
        </div>
        <hr />

        <div className="flex">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.Title}
              image={item.Image}
              description={item.Description}
              status={item.status}
              poolSize={item.poolsize}
              usdc={item.USDC}
              loanTenure={item.loantenure}
              logo={item.logo}
            />
          ))}
        </div>
      </div>
    </>
  );
}
