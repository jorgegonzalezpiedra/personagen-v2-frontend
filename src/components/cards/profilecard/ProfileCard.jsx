import "./ProfileCard.css";
import { RestartIcon } from "../../../assets/Icons";
import PropTypes from "prop-types";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileCard = ({ profileType }) => {
  ProfileCard.propTypes = {
    profileType: PropTypes.string.isRequired,
  };

  useEffect(() => {
    loadComponent(profileType);
  }, []);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const [isLoading, setIsLoading] = useState(true);
  const [document, setDocument] = useState("");
  const [profile, setProfile] = useState({
    name: null,
    phoneNumber: null,
    email: null,
    gender: null,
    birthDate: null,
    lastName1: null,
    lastName2: null,
    userName: null,
    password: null,
    creationDate: null,
    industry: null,
  });

  const [cif, setCif] = useState({
    orgTypeCode: null,
    orgType: null,
    provinceCode: null,
    province: null,
    correlativeNumber: null,
    controlDigit: null,
  });

  const loadComponent = async (profileType) => {
    try {
      setIsLoading(true);

      if (profileType == "user") {
        const response = await fetch(
          "https://personagen.fly.dev/profiles/user",
          { headers: { "api-key": API_KEY } }
        );
        const responseData = await response.json();
        setDocument(responseData.document.document);
        setProfile({
          name: responseData.name,
          phoneNumber: responseData.phoneNumber,
          email: responseData.email,
          gender: responseData.gender,
          birthDate: responseData.birthDate,
          lastName1: responseData.lastName1,
          lastName2: responseData.lastName2,
          userName: responseData.userName,
          password: responseData.password,
        });
      } else if (profileType == "company") {
        const response = await fetch(
          "https://personagen.fly.dev/profiles/company",
          { headers: { "api-key": API_KEY } }
        );
        const responseData = await response.json();
        setDocument(responseData.document.document);
        setProfile({
          name: responseData.name,
          phoneNumber: responseData.phoneNumber,
          email: responseData.email,
          creationDate: responseData.creationDate,
          industry: responseData.industry,
        });
        setCif({
          orgTypeCode: responseData.document.orgTypeCode,
          orgType: responseData.document.orgType,
          provinceCode: responseData.document.provinceCode,
          province: responseData.document.province,
          correlativeNumber: responseData.document.correlativeNumber,
          controlDigit: responseData.document.controlDigit,
        });
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col border-2 mt-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-200 w-[1000px] sm:max-xl:mt-5">
      <div className="flex flex-row justify-between">
        <h2 className="text-black font-bold text-3xl">{profileType}</h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          {!isLoading ? (
            <button
              onClick={() => loadComponent(profileType)}
              className="text-black items-center bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition lg:text-4xl"
            >
              <RestartIcon />
            </button>
          ) : (
            <div className="text-black w-[68px] h-[68px] animate-pulse items-center bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition lg:text-4xl"></div>
          )}
        </div>
      </div>
      <div className="px-6 py-8 sm:p-10 sm:pt-3 sm:pb-6">
        {/* FIRST ROW */}
        <div className="w-full justify-center flex flex-row text-left">
          {/* DOCUMENT */}
          <div className="mt-2">
            <span className="text-black tracking-tight text-4xl">
              Documento
            </span>
            <CopyToClipboard
              text={document}
              onCopy={() => toast.info("Copiado!")}
            >
              {!isLoading ? (
                <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                  {document}
                </span>
              ) : (
                <span className="text-white w-[352px] animate-pulse items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl">
                  <div className="opacity-0">CARGANDO</div>
                </span>
              )}
            </CopyToClipboard>
          </div>

          {/* DATE */}
          <div className="mt-2">
            <span className="text-black tracking-tight text-4xl">
              {profileType == "user"
                ? "Fecha de nacimiento"
                : "Fecha de creación"}
            </span>
            <div>
              {profileType == "user" ? (
                <CopyToClipboard
                  text={profile.birthDate}
                  onCopy={() => toast.info("Copiado!")}
                >
                  {!isLoading ? (
                    <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                      {profile.birthDate}
                    </span>
                  ) : (
                    <span className="text-white w-[352px] animate-pulse items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl">
                      <div className="opacity-0">CARGANDO</div>
                    </span>
                  )}
                </CopyToClipboard>
              ) : (
                <CopyToClipboard
                  text={profile.creationDate}
                  onCopy={() => toast.info("Copiado!")}
                >
                  {!isLoading ? (
                    <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                      {profile.creationDate}
                    </span>
                  ) : (
                    <span className="text-white w-[352px] animate-pulse items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl">
                      <div className="opacity-0">CARGANDO</div>
                    </span>
                  )}
                </CopyToClipboard>
              )}
            </div>
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="w-full justify-center flex flex-row text-left">
          <div className="mt-2">
            <span className="text-black tracking-tight text-4xl">
              {profileType == "user" ? "Nombre" : "Razón social"}
            </span>
            <div className="flex flex-row">
              <CopyToClipboard
                text={profile.name}
                onCopy={() => toast.info("Copiado!")}
              >
                {!isLoading ? (
                  <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                    {profile.name}
                  </span>
                ) : (
                  <span className="text-white w-[352px] animate-pulse items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl">
                    <div className="opacity-0">CARGANDO</div>
                  </span>
                )}
              </CopyToClipboard>

              {profileType == "user" ? (
                <div>
                  <span className="text-black tracking-tight text-4xl">
                    Primer apellido
                  </span>
                  <CopyToClipboard
                    text={profile.lastName1}
                    onCopy={() => toast.info("Copiado!")}
                  >
                    {!isLoading ? (
                      <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                        {profile.lastName1}
                      </span>
                    ) : (
                      <span className="text-white w-[352px] animate-pulse items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl">
                        <div className="opacity-0">CARGANDO</div>
                      </span>
                    )}
                  </CopyToClipboard>
                </div>
              ) : null}

              {profileType == "user" ? (
                <div>
                  <span className="text-black tracking-tight text-4xl">
                    Segundo apellido
                  </span>
                  <CopyToClipboard
                    text={profile.lastName2}
                    onCopy={() => toast.info("Copiado!")}
                  >
                    {!isLoading ? (
                      <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                        {profile.lastName2}
                      </span>
                    ) : (
                      <span className="text-white w-[352px] animate-pulse items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl">
                        <div className="opacity-0">CARGANDO</div>
                      </span>
                    )}
                  </CopyToClipboard>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* THIRD ROW */}
        <div className="w-full justify-center flex flex-row text-left">
          <div className="mt-2">
            {profileType == "user" ? (
              <div className="flex flex-row">
                <div>
                  <span className="text-black tracking-tight text-4xl">
                    Usuario
                  </span>
                  <CopyToClipboard
                    text={profile.userName}
                    onCopy={() => toast.info("Copiado!")}
                  >
                    {!isLoading ? (
                      <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                        {profile.userName}
                      </span>
                    ) : (
                      <span className="text-white w-[352px] animate-pulse items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl">
                        <div className="opacity-0">CARGANDO</div>
                      </span>
                    )}
                  </CopyToClipboard>
                </div>

                <div>
                  <span className="text-black tracking-tight text-4xl">
                    Contraseña
                  </span>
                  <CopyToClipboard
                    text={profile.password}
                    onCopy={() => toast.info("Copiado!")}
                  >
                    {!isLoading ? (
                      <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                        {profile.password}
                      </span>
                    ) : (
                      <span className="text-white w-[352px] animate-pulse items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl">
                        <div className="opacity-0">CARGANDO</div>
                      </span>
                    )}
                  </CopyToClipboard>
                </div>
              </div>
            ) : (
              <div className="flex flex-row">
                <div>
                  <span className="text-black tracking-tight text-4xl">
                    Industria
                  </span>
                  <CopyToClipboard
                    text={profile.industry}
                    onCopy={() => toast.info("Copiado!")}
                  >
                    {!isLoading ? (
                      <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                        {profile.industry}
                      </span>
                    ) : (
                      <span className="text-white w-[352px] animate-pulse items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl">
                        <div className="opacity-0">CARGANDO</div>
                      </span>
                    )}
                  </CopyToClipboard>
                </div>

                <div>
                  <span className="text-black tracking-tight text-4xl">
                    Tipo de empresa
                  </span>
                  <CopyToClipboard
                    text={cif.orgType}
                    onCopy={() => toast.info("Copiado!")}
                  >
                    {!isLoading ? (
                      <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                        {cif.orgType}
                      </span>
                    ) : (
                      <span className="text-white w-[352px] animate-pulse items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl">
                        <div className="opacity-0">CARGANDO</div>
                      </span>
                    )}
                  </CopyToClipboard>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="w-full justify-center flex flex-row text-left">
          <div className="mt-2">
            <div className="flex flex-row">
              <div>
                <span className="text-black tracking-tight text-4xl">
                  Email
                </span>
                <CopyToClipboard
                  text={profile.email}
                  onCopy={() => toast.info("Copiado!")}
                >
                  {!isLoading ? (
                    <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                      {profile.email}
                    </span>
                  ) : (
                    <span className="text-white w-[352px] animate-pulse items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl">
                      <div className="opacity-0">CARGANDO</div>
                    </span>
                  )}
                </CopyToClipboard>
              </div>
              <div>
                <span className="text-black tracking-tight text-4xl">
                  Teléfono
                </span>
                <CopyToClipboard
                  text={profile.phoneNumber}
                  onCopy={() => toast.info("Copiado!")}
                >
                  {!isLoading ? (
                    <span className="hover:cursor-copyx text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full px-8 py-4 text-4xl">
                      {profile.phoneNumber}
                    </span>
                  ) : (
                    <span className="text-white w-[352px] animate-pulse items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition px-8 py-4 text-4xl">
                      <div className="opacity-0">CARGANDO</div>
                    </span>
                  )}
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
};

export default ProfileCard;
