export default function OrderCard() {
  return (
    <>
      <div className="xl:bg-[url('../assets/images/pattern-background-desktop.svg')] bg-[url('../assets/images/pattern-background-mobile.svg')] h-[194px] xl:h-[437px] w-full absolute left-0 top-0 -z-10"></div>

      <main className="bg-white rounded-2xl w-[320px] overflow-hidden shadow-css-scan-12">
        <section className="bg-[url('../assets/images/illustration-hero.svg')] w-full h-40 bg-cover bg-center"></section>

        <section className="p-8 ">
          <h1 className="text-2xl font-black text-center text-dark-blue">
            Order Summary
          </h1>
          <p className="my-4 text-center text-desaturated-blue">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex items-center gap-4 p-4 text-xs rounded-lg bg-very-pale-blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fill-rule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
                <path
                  fill="#717FA6"
                  fill-rule="nonzero"
                  d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
                />
              </g>
            </svg>
            <div className="flex flex-col gap-1 mr-auto">
              <span className="font-black text-dark-blue">Annual Plan</span>
              <span className="font-bold text-desaturated-blue">
                $59.99/year
              </span>
            </div>
            <span className="font-black underline cursor-pointer text-bright-blue hover:no-underline hover:text-desaturated-blue">
              Change
            </span>
          </div>
          <button className="w-full py-3 my-4 text-sm font-bold shadow-css-scan-73 rounded-xl bg-bright-blue text-very-pale-blue hover:bg-desaturated-blue">
            Proceed to Payment
          </button>
          <button className="block py-3 m-auto text-sm font-bold text-desaturated-blue hover:text-dark-blue">
            Cancel Order
          </button>
        </section>
      </main>
    </>
  );
}
