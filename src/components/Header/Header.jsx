import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container py-4 flex flex-col justify-center items-center">
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <img
              className=" rounded-full"
              width={150}
              height={150}
              src="profile.jpg"
              alt="img"
            />
            <h2 className="text-white text-[23px] font-medium">
              Makhmudbek Toshtemirov
            </h2>
            <h3 className="text-white text-[20px] font-medium">
              Frontend Developer
            </h3>
          </div>
        </div>
        <div className="flex flex-col w-[100%] md:w-[200%] py-2 gap-2">
          <a
            href="https://www.linkedin.com/in/mahmudbek-toshtemirov/"
            target="_blank"
          >
            <div className="bg-navy p-4 rounded-md flex justify-center gap-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  color="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </div>
              <h2 className="text-white font-medium text-[20px]">Linkedin</h2>
            </div>
          </a>
          {/* /* git hub*/}
          <a
            href="https://www.linkedin.com/in/mahmudbek-toshtemirov/"
            target="_blank"
          >
            <div className="bg-navy p-4 rounded-md flex justify-center gap-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  color="white"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.436 15.436 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z"
                  />
                </svg>
              </div>
              <h2 className="text-white font-medium text-[20px]">Git Hub</h2>
            </div>
          </a>
          {/* /* telegram*/}
          <a href="" target="_blank">
            <div className="bg-navy p-4 rounded-md flex justify-center gap-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  color="white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"
                  />
                </svg>
              </div>
              <h2 className="text-white font-medium text-[20px]">Gmail</h2>
            </div>
          </a>

          {/* gmail */}
          <a href="https://t.me/tm_akito1916" target="_blank">
            <div className="bg-navy p-4 rounded-md flex justify-center gap-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  color="white"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M16 .5C7.437.5.5 7.438.5 16S7.438 31.5 16 31.5c8.563 0 15.5-6.938 15.5-15.5S24.562.5 16 .5zm7.613 10.619l-2.544 11.988c-.188.85-.694 1.056-1.4.656l-3.875-2.856l-1.869 1.8c-.206.206-.381.381-.781.381l.275-3.944l7.181-6.488c.313-.275-.069-.431-.482-.156l-8.875 5.587l-3.825-1.194c-.831-.262-.85-.831.175-1.231l14.944-5.763c.694-.25 1.3.169 1.075 1.219z"
                  />
                </svg>
              </div>
              <h2 className="text-white font-medium text-[20px]">Telegram</h2>
            </div>
          </a>
          {/* /* git hub*/}
          <a
            href="https://www.instagram.com/mahmudbekk_1916/profilecard/?igsh=ZzlycHYxa291Yjg5"
            target="_blank"
          >
            <div className="bg-navy p-4 rounded-md flex justify-center gap-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  color="white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 0C8.74 0 8.333.015 7.053.072C5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053C.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384a5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913c.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071c1.17.055 1.805.249 2.227.415c.562.217.96.477 1.382.896c.419.42.679.819.896 1.381c.164.422.36 1.057.413 2.227c.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382a3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413c-1.274.057-1.649.07-4.859.07c-3.211 0-3.586-.015-4.859-.074c-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899a3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235c-.045-1.26-.061-1.649-.061-4.844c0-3.196.016-3.586.061-4.861c.061-1.17.255-1.814.42-2.234c.21-.57.479-.96.9-1.381c.419-.419.81-.689 1.379-.898c.42-.166 1.051-.361 2.221-.421c1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324a6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0a1.44 1.44 0 0 1 2.88 0z"
                  />
                </svg>
              </div>
              <h2 className="text-white font-medium text-[20px]">Instagram</h2>
            </div>
          </a>
          <a
            href="/Toshtemirovmahmudbek.pdf"
            download="Mahmudbek Toshtemirov.pdf"
            target="_blank"
          >
            <div className="bg-navy p-4 rounded-md flex justify-center gap-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  color="white"
                  viewBox="0 0 717 666"
                >
                  <path
                    fill="currentColor"
                    d="M586 271H457V60c0-18-15-33-33-33H295c-19 0-34 15-34 33v211H132c-17 0-23 11-10 24l214 213c6 6 14 9 23 9s18-3 24-9l213-213c12-13 8-24-10-24zM0 422v228c0 10 5 16 16 16h684c11 0 17-6 17-16V422c0-10-8-17-17-17h-65c-9 0-17 8-17 17v145H98V422c0-10-7-17-16-17H16c-9 0-16 8-16 17z"
                  />
                </svg>
              </div>
              <h2 className="text-white font-medium text-[20px]">Resume</h2>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
