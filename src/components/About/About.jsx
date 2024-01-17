export default function About() {
  return (
      <div className="py-16 bg-white flex h-full">
          <div className="container h-full m-auto px-6 text-gray-600 md:px-12 xl:px-6 flex items-center">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 justify-center justify-items-center">
                  <div className="md:5/12 lg:w-5/12">
                      <img className="rounded-lg"
                          src="https://wallpapers.com/images/featured/space-art-te2d0kf6oh9090pu.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          I like to make all sort of things
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Born 2005 
                          <br />
                          Grew up in India 
                      </p>
                      <p className="mt-4 text-gray-600">
                          Full of dreams
                          <br />
                          Hello World
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}