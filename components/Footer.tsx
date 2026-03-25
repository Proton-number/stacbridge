export default function () {
  return (
    <footer>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-8 bg-gray-100 gap-4">
        <div className="space-y-4">
          {" "}
          <h2 className="text-lg md:text-xl font-semibold tracking-wide">
            STACBRIDGE
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            © 2024 Stacbridge Holdings. All Rights Reserved.
          </p>
        </div>
        <div>
          <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
            <li className="hover:text-black cursor-pointer">PRIVACY POLICY</li>
            <li className="hover:text-black cursor-pointer">
              TERMS OF SERVICE
            </li>
            <li className="hover:text-black cursor-pointer">
              INVESTOR RELATIONS
            </li>
            <li className="hover:text-black cursor-pointer">GLOBAL OFFICES</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
