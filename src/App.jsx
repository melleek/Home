import './App.css'

const App = () => {
  return (
    <div>
      {/* navbar */}
      <navbar className='laptop:flex justify-between items-center px-[24px] py-[24px]'>
        <div className='tablet:flex justify-between items-center px-[24px]'>
          <h1 className='laptop:text-[32px] tablet:text-[32px] font-[700]'>magnifico</h1>
          <img src="src/assets/icon/Buttons Group.png" className='laptop:hidden'/>
        </div>
        <div>
          <div id="id1" className='laptop:flex items-center gap-[8px] tablet:hidden'>
            <p className='text-[16px] font-[500] leading-[24px] tracking-[0.5px]'>Products</p>
            <img src="src/assets/icon/chevron-down.png"/>
            <p className='text-[16px] font-[500] leading-[24px] tracking-[0.5px]'>Solutions</p>
            <img src="src/assets/icon/chevron-down.png"/>
            <p className='text-[16px] font-[500] leading-[24px] tracking-[0.5px]'>Services</p>
            <img src="src/assets/icon/chevron-down.png"/>
            <p className='text-[16px] font-[500] leading-[24px] tracking-[0.5px]'>Help Center</p>
            <img src="src/assets/icon/chevron-down.png"/>
            <p className='text-[16px] font-[500] leading-[24px] tracking-[0.5px]'>Pricing </p>
            <img src="src/assets/icon/chevron-down.png"/>
          </div>
        </div>
        <div className="tablet:hidden laptop:flex items-center gap-[50px]">
          <p className='text-[#2563EB] text-[16px] tracking-[0.9px]'>Log In</p>
          <button className='laptop:rounded-[8px] text-[16px] tracking-[0.9px] flex px-[16px] py-[16px] justify-center items-center bg-[#2563EB] text-white gap-[12px]'>Sign Up Free <img src="src/assets/icon/Vector.png" alt="" /></button>
        </div>
      </navbar>

      {/* section1 */}
      <section className='border-[1px]'>
        <div className="laptop:flex justify-center items:center gap-[80px] p-[80px] tablet:hidden">
          <div className="laptop:w-[40%] tablet:w-[100%]">
            <h1 className='laptop:block text-[72px] text-[#0F172A] font-[800] leading-[110%] pb-[20px]'>Team projects, done well</h1>
            <h1 className='laptop:hidden tablet:text-[40px]'>Teach students worldwide</h1>
            <p className='laptop: text-[18px] font-[400] leading-[160%] pb-[20px]'>The only platform that gives your team all the tools needed to work together on their awesome projects. </p>
            <div className='flex items-center gap-[15px] pb-[40px]'>
              <button className='laptop:flex border-[1px] w-[450px] h-[48px] flex items-center pl-[10px] py-[12px] gap-[10px] tablet:hidden'><img src="src/assets/icon/envelope.png" alt="" /> <p>Enter work email</p></button>
              <button className='laptop:flex rounded-[8px] w-[180px] py-[12px] tracking-[0.9px] justify-center items-center bg-[#2563EB] text-white gap-[5px]'>Sign Up Free <img src="src/assets/icon/Vector.png" alt="" /></button>
            </div>
            <div className='bg-[rgba(148,163,184,0.1)] flex rounded-[8px] p-[16px] justify-around items-center flex-wrap'>
              <img src="src/assets/icon/Logo-grey.png" alt="" />
              <img src="src/assets/icon/Logo-grey (1).png" alt="" />
              <img src="src/assets/icon/Logo-grey (2).png" alt="" />
              <img src="src/assets/icon/Logo-grey (3).png" alt="" />
            </div>
          </div>
          <div className="laptop:w-[50%] tablet:w-[100%]">
            <img src="src/assets/images/Desktop.png" alt="" />
          </div>
        </div>

        {/* media */}
        <div className="tablet:flex-col items:center gap-[40px] p-[24px] laptop:hidden">
          <div>
            <h1 className='laptop:hidden tablet:text-[40px] pb-[15px]'>Teach students worldwide</h1>
            <p className='tablet:text-[16px] font-[400] leading-[160%] pb-[15px]'>The only platform that gives your team all the tools needed to work together on their awesome projects. </p>
            <div className='flex items-center gap-[16px] pb-[20px]'>
              <button className='laptop:hidden tablet:border-[1px] w-[177px] h-[48px] flex justify-center pt-[10px] gap-[10px] '><img src="src/assets/icon/envelope.png" alt="" /> <p>Enter work email</p></button>
              <button className='tablet:rounded-[8px] text-[16px] tracking-[0.9px] flex px-[10px] py-[12px] justify-center items-center bg-[#2563EB] text-white gap-[12px] laptop:hidden'>Sign Up Free <img src="src/assets/icon/Vector.png" alt="" /></button>
            </div>
            <div className='bg-[rgba(148,163,184,0.1)] flex rounded-[8px] p-[16px] justify-around items-center flex-wrap mb-[20px]'>
              <img src="src/assets/icon/Logo-grey.png" alt="" />
              <img src="src/assets/icon/Logo-grey (1).png" alt="" />
              <img src="src/assets/icon/Logo-grey (2).png" alt="" />
              <img src="src/assets/icon/Logo-grey (3).png" alt="" />
            </div>
          </div>
          <div>
            <img src="src/assets/images/Desktop.png" alt="" />
          </div>
        </div>
      </section>


      {/* sec2 */}
      <section>
        <div className='laptop:flex justify-between items-center p-[80px] tablet:hidden'>
          <div>
            <img src="src/assets/images/Left.png" alt="Enjoy your time working" />
          </div>
          <div className='w-[40%]'>
            <h1 className='text-[56px] pb-[20px]'>Enjoy your time working</h1>
            <p className='text-[18px]'>Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.</p>
            <div className='flex items-center gap-[5px]  pt-[36px]'>
            <p className='text-[#2563EB] text-[16px]'>See how it helped other</p>
            <img src="src/assets/images/Vector.png" alt=""/>
            </div>
          </div>
        </div>

        <div className='laptop:flex justify-between items-center p-[80px] tablet:hidden'>
          <div className='w-[40%]'>
            <h1 className='text-[56px] pb-[20px]'>Get all the tools your team needs</h1>
            <p className='text-[18px]'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
            <div className='flex items-center gap-[5px]  pt-[36px]'>
            <p className='text-[#2563EB] text-[16px]'>Check the tools</p>
            <img src="src/assets/images/Vector.png" alt=""/>
            </div>
          </div>
          <div>
            <img src="src/assets/images/Right.png" alt="Enjoy your time working" />
          </div>
        </div>

        {/* media */}
        <div className='tablet:px-[16px] py-[48px]  laptop:hidden'>
          <div>
            <h1 className='text-[40px] pb-[20px]'>Enjoy your time working</h1>
            <p className='text-[18px]'>Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.</p>
            <div className='flex items-center gap-[5px]  pt-[36px]'>
            <p className='text-[#2563EB] text-[16px]'>See how it helped other</p>
            <img src="src/assets/images/Vector.png" alt=""/>
            </div>
          </div>
          <div className='mt-[50px]'>
            <img src="src/assets/images/Left.png" alt="Enjoy your time working" />
          </div>
        </div>

        <div className='tablet:px-[16px] py-[48px]  laptop:hidden'>
          <div>
            <h1 className='text-[40px] pb-[20px]'>Get all the tools your team needs</h1>
            <p className='text-[18px]'>Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.</p>
          </div>
          <div className='mt-[50px]'>
            <img src="src/assets/images/Right.png" alt="Enjoy your time working" />
          </div>
        </div>
      </section>


      {/* sec3 */}
      <section className='laptop:block p-[120px] pb-[0] tablet:hidden'>
        <div id="section"></div>
      </section>

       {/* media */}
       <section className='tablet:block laptop:hidden'>
        <div id="st"></div>
      </section>

       {/* sec4 */}
       <section>
        <div className='laptop:flex justify-center items-center gap-[80px] mb-[160px] tablet:hidden'>
          <div className='w-[38%]'>
            <h1 className='font-[700] text-[56px]'>Improve workflow</h1>
            <div className="flex justify-start items-center mt-[24px]">
              <button className='rounded-[8px] rounded-r-[0] p-[16px] h-[40px] flex justify-center items-center w-[200px] bg-[#e7e8e8cb] border-[1px]'>Research</button>
              <button className='rounded-[8px] rounded-l-[0] rounded-r-[0] p-[16px] h-[40px] flex justify-center items-center w-[200px] bg-[#FFF] border-[1px]'>Plan</button>
              <button className='rounded-[8px] rounded-l-[0] p-[16px] h-[40px] flex justify-center items-center w-[200px] bg-[#FFF] border-[1px]'>Design</button>
            </div>
            <p className='mt-[24px]'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
            <div className='flex items-center gap-[5px]  pt-[36px]'>
              <p className='text-[#2563EB] text-[16px]'>Check the tools</p>
              <img src="src/assets/images/Vector.png" alt=""/>
            </div>
          </div>
          <div>
            <img src="src/assets/images/Left (2).png" alt="" />
          </div>
        </div>

        {/* media */}
        <div className='tablet:pt-[48px] px-[12px] laptop:hidden'>
          <div>
            <h1 className='font-[700] text-[40px]'>Improve workflow</h1>
            <div className="flex justify-start items-center mt-[24px]">
              <button className='rounded-[8px] rounded-r-[0] p-[16px] h-[40px] flex justify-center items-center w-[200px] bg-[#e7e8e8cb] border-[1px]'>Research</button>
              <button className='rounded-[8px] rounded-l-[0] rounded-r-[0] p-[16px] h-[40px] flex justify-center items-center w-[200px] bg-[#FFF] border-[1px]'>Plan</button>
              <button className='rounded-[8px] rounded-l-[0] p-[16px] h-[40px] flex justify-center items-center w-[200px] bg-[#FFF] border-[1px]'>Design</button>
            </div>
            <p className='mt-[24px]'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
            <div className='flex items-center gap-[5px]  pt-[36px] pb-[48px]'>
              <p className='text-[#2563EB] text-[16px]'>Check the tools</p>
              <img src="src/assets/images/Vector.png" alt=""/>
            </div>
          </div>
          <div>
            <img src="src/assets/images/Left (2).png" alt="" />
          </div>
        </div>
       </section>

       {/* secEnd */}

       <section className='laptop:flex tablet:hidden'>
        <div id="all">
          <h1 className='text-[white] text-[56px]'>Join the community today</h1>
          <p className='text-white text-center'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
          <button className='rounded-[8px] text-[16px] tracking-[0.9px] flex px-[16px] py-[16px] w-[300px] justify-center items-center bg-[#2563EB] text-white gap-[24px]'>Sign Up Free <img src="src/assets/icon/Vector.png" alt="" /></button>
        </div>
       </section>\
       
       {/* media */}
       <section className='tablet:flex laptop:hidden'>
        <div id="li">
          <h1 className='text-[white] text-[40px] text-center font-[900]'>Join the community today</h1>
          <p className='text-white text-center'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
          <button className='rounded-[8px] text-[16px] tracking-[0.9px] flex px-[16px] py-[16px] w-[300px] justify-center items-center bg-[#2563EB] text-white gap-[24px]'>Sign Up Free <img src="src/assets/icon/Vector.png" alt="" /></button>
        </div>
       </section>
       

       {/* footer */}
       <footer className='laptop:flex m-[auto] justify-between items-center w-[80%] h-[20vh] tablet:hidden'>
        <div className='flex items-center gap-[15px]'>
          <h1 className='font-[700]'>magnifico</h1>
          <p className='text-[#475569]'>@ 2023. All rights reserved.</p>
        </div>
        <div className='flex items-center gap-[16px] text-[#475569]'>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Support</p>
          <p>About</p>
          <p>Resources</p>
          <p>Contact</p>
        </div>
       </footer>

       {/* media */}
       <footer className='tablet:block py-[24px] px-[12px] w-[80%] h-[20vh] laptop:hidden'>
        <div>
          <h1 className='font-[700] text-[24px]'>magnifico</h1>
          <p className='text-[#475569] mt-[16px]'>@ 2023. All rights reserved.</p>
        </div>
        <div className='flex items-center gap-[10px] text-[#475569] mt-[26px]'>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Support</p>
          <p>About</p>
          <p>Resources</p>
          <p>Contact</p>
        </div>
       </footer>
       </div>

  )
}

export default App