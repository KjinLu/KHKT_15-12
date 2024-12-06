import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <div className='home'>
       <div className='main'>
            <h1 className='tittle'>Bảng xếp hạng thi đua tập thể</h1>
            <div className='block-main'>
                <div className='block'>
                    <h2 className='khoi-name'>Khối 10</h2>
                    <div className='content-main'>
                        <div className="content">
                            <p className='rank'>1</p>
                            <p className='classRoom'>10A1</p>
                        </div>
                        <div className="content">
                            <p className='rank'>1</p>
                            <p className='classRoom'>10A1</p>
                        </div>
                        <div className="content">
                            <p className='rank'>1</p>
                            <p className='classRoom'>10A1</p>
                        </div>
                    </div>
                </div>
                <div className='block'>
                    <h2 className='khoi-name'>Khối 11</h2>
                </div>
                <div className='block'>
                    <h2 className='khoi-name'>Khối 12</h2>
                </div>
            </div>
       </div>
       <div className='main'>
            <h1 className='tittle'>TOP 30 THI ĐUA ĐOÀN VIÊN THANH NIÊN
            </h1>
            <div className='block-main'>
                <div className='block'>
                    <h2 className='khoi-name'>Khối 10</h2>
                </div>
                <div className='block'>
                    <h2 className='khoi-name'>Khối 11</h2>
                </div>
                <div className='block'>
                    <h2 className='khoi-name'>Khối 12</h2>
                </div>
            </div>
       </div>
    </div>
  )
}
