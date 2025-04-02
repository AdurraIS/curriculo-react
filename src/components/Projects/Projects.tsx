const Projects = () => {
    return (
        <div className="flex flex-row gap-5 items-center justify-center">
            <div className="p-5">
                <div className="m-auto h-full bg-orange-200 p-10 min-h-[300px] rounded-[10px] w-[30vw]">

                    <div className="flex flex-row  max-[639px]:flex-col items-center justify-between max-[639px]:w-48 gap-4">
                        <div className="w-96">
                            <a href="https://github.com/AdurraIS/chat-project" target="_blank">
                                <h3 className="text-[20px] pb-2">🔗 Chat Project</h3>
                            </a>

                            <p className="text-[16px] max-[639px]:w-48 mb-4"> Projeto que desenvolvi um chat utilizando React, WebSocket e Firebase.
                            </p>
                            <h4 className="text-[16px] mb-2">Desenvolvi:</h4>
                            <p className="text-[16px] max-[639px]:w-48">
                                • WebSocket com NodeJS e a biblioteca WS.
                            </p>
                            <p className="text-[16px] max-[639px]:w-48">
                                • Interface web com React.js.
                            </p>
                            <p className="text-[16px] max-[639px]:w-48">
                                • Persistência de usuarios conectados no firebase.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="p-5">
                <div className="m-auto bg-orange-200 p-10 rounded-[10px] min-h-[300px] w-[30vw]">

                    <div className="flex flex-row  max-[639px]:flex-col items-center justify-between max-[639px]:w-48 gap-4">
                        <div className="w-96">
                            <a href="https://github.com/AdurraIS/SpringAPI_LevelGroupChallenge" target="_blank">
                                <h3 className="text-[20px] pb-2">🔗 Sales Unity</h3>
                            </a>

                            <p className="text-[16px] max-[639px]:w-48 mb-4"> Projeto em equipe que desenvolvi uma aplicação web para
                                simplificar o processo de cotação de compras.
                            </p>
                            <h4 className="text-[16px] mb-2">Desenvolvi:</h4>
                            <p className="text-[16px] max-[639px]:w-48">
                                • API com Spring Boot e Spring Security.
                            </p>
                            <p className="text-[16px] max-[639px]:w-48">
                                • Interface web com React.js.
                            </p>
                            <p className="text-[16px] max-[639px]:w-48">
                                • API com .NET para a geração de relatórios.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;