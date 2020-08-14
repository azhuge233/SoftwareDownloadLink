addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

var html = `
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>DownloadLink</title>
    <meta name="azhuge233" content="often used apps">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">
    .table thead tr th {
        text-align: center;
        vertical-align: middle;
    	background-color: #2e2e2e;
    }

    .table tbody tr td {
        margin: auto;
        width: auto;
        text-align: center;
        vertical-align: middle;
    }

    #TopBtn {
        position:fixed;
        right:3px;
        bottom:3px;
    }

    </style>
   	<link href="https://cdn.bootcss.com/twitter-bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="https://img.icons8.com/flat_round/64/000000/link--v1.png" />
    <link rel="apple-touch-icon" type="image/png" href="https://img.icons8.com/flat_round/64/000000/link--v1.png" />
</head>

<body class="text-center container" style="background-color: #121112; color: #EEEEEE;">
	<a href="#top"></a>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">
        	<img src="https://img.icons8.com/flat_round/64/000000/link--v1.png" width="30" height="30" class="d-inline-block align-top" alt="">
        	Download Link
        </span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      		<span class="navbar-toggler-icon"></span>
    	</button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
        	<ul class="navbar-nav mr-auto">
        		<li class="nav-item">
        			<a class="nav-link" href="#dev">Dev</a>
        		</li>
        		<li class="nav-item">
        			<a class="nav-link" href="#virt">Virtualization</a>
        		</li>
				<li class="nav-item">
        			<a class="nav-link" href="#editor">Editor</a>
        		</li>
        		<li class="nav-item">
        			<a class="nav-link" href="#download">Download</a>
        		</li>
        		<li class="nav-item">
        			<a class="nav-link" href="#game">Game</a>
        		</li>
        		<li class="nav-item">
        			<a class="nav-link" href="#im">IM</a>
        		</li>
        		<li class="nav-item">
        			<a class="nav-link" href="#media">Media</a>
        		</li>
        		<li class="nav-item">
        			<a class="nav-link" href="#browser">Browser</a>
        		</li>
        		<li class="nav-item">
        			<a class="nav-link" href="#office">Office</a>
        		</li>
        		<li class="nav-item">
        			<a class="nav-link" href="#net">Network</a>
        		</li>
        		<li class="nav-item">
        			<a class="nav-link" href="#remote">Remote Desktop</a>
        		</li>
        		<li class="nav-item">
        			<a class="nav-link" href="#others">Others</a>
        		</li>
        	</ul>
    	</div>
    </nav>
    <br/>

    <div class="alert alert-info alert-dismissible fade show" role="alert">
    	All the links are from their official websites.
  		<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    		<span aria-hidden="true">&times;</span>
  		</button>
	</div>

    <div id="TopBtn" class="btn btn-secondary">
        <span>Back to Top</span>
    </div>

    <a href="#dev"></a>
    <div id="dev">
        <h5>Dev</h5>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Github Desktop
                    </td>
                    <td>
                        <a href="https://central.github.com/deployments/desktop/desktop/latest/win32" target="_blank">
                            Windows
                        </a>
                        &nbsp;
                        <a href="https://central.github.com/deployments/desktop/desktop/latest/darwin" target="_blank">
                            macOS
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Pycharm
                    </td>
                    <td>
                        <table class="table table-borderless table-sm">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Community</th>
                                    <th scope="col">Professional</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="https://www.jetbrains.com/pycharm/download/download-thanks.html?platform=windows&code=PCC" target="_blank">
                                            Windows
                                        </a>
                                        &nbsp;
                                        <a href="https://www.jetbrains.com/pycharm/download/download-thanks.html?platform=mac&code=PCC" target="_blank">
                                            macOS
                                        </a>
                                        &nbsp;
                                        <a href="https://www.jetbrains.com/pycharm/download/download-thanks.html?platform=linux&code=PCC" target="_blank">
                                            Linux
                                        </a>
                                    </td>
                                    <td>
                                        <a href="https://www.jetbrains.com/pycharm/download/download-thanks.html?platform=windows" target="_blank">
                                            Windows
                                        </a>
                                        &nbsp;
                                        <a href="https://www.jetbrains.com/pycharm/download/download-thanks.html?platform=mac" target="_blank">
                                            macOS
                                        </a>
                                        &nbsp;
                                        <a href="https://www.jetbrains.com/pycharm/download/download-thanks.html?platform=linux" target="_blank">
                                            Linux
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        Visual Studio
                    </td>
                    <td>
                        <a href="https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community" target="_blank">
                            Community
                        </a>
                        &nbsp;
                        <a href="https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Professional" target="_blank">
                            Professional
                        </a>
                        &nbsp;
                        <a href="https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Enterprise" target="_blank">
                            Enterprise
                        </a>
                        &nbsp;
                        <a href="https://visualstudio.microsoft.com/thank-you-downloading-visual-studio-mac/?sku=communitymac" target="_blank">
                            macOS
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Visual Studio Code
                    </td>
                    <td>
                        <a href="https://code.visualstudio.com/#alt-downloads" target="_blank">
                            Download Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Python
                    </td>
                    <td>
                        <a href="https://www.python.org/downloads/" target="_blank">
                            Download Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        .NET Core & .NET Framework
                    </td>
                    <td>
                        <a href="https://dotnet.microsoft.com/download" target="_blank">
                            Download Page
                        </a>
                    </td>
                </tr>
				<tr>
                    <td>
                        Java SDK
                    </td>
                    <td>
                        <a href="https://www.oracle.com/java/technologies/javase-downloads.html" target="_blank">
                            Oracle Java SE
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Code Blocks
                    </td>
                    <td>
                        <a href="http://www.codeblocks.org/downloads/26" target="_blank">
                            Download Page
                        </a>
                    </td>
                </tr>
				<tr>
                    <td>
                        SSMS
                    </td>
                    <td>
                        <a href="https://aka.ms/ssmsfullsetup" target="_blank">
                            Direct Link
                        </a>
                    </td>
                </tr>
				<tr>
                    <td>
                        SQL Server
                    </td>
                    <td>
                        <a href="https://www.microsoft.com/zh-cn/sql-server/sql-server-downloads" target="_blank">
                            Download Page
                        </a>
                    </td>
                </tr>
				<tr>
					<td>
						Chromedriver	
					</td>
					<td>
						<a href="http://npm.taobao.org/mirrors/chromedriver/" target="_blank">
							Mirror Site
						</a>
						&nbsp;
						<a href="https://chromedriver.storage.googleapis.com/index.html" target="_blank">
							Release Page
						</a>
					</td>
				</tr>
				<tr>
					<td>
						Microsoft Edge Webdriver	
					</td>
					<td>
						<a href="https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/" target="_blank">
							Release Page
						</a>
					</td>
				</tr>
                <!--<tr>
						<td>
							
						</td>
						<td>
							<a href="" target="_blank">
								Download Page
							</a>
							&nbsp;
						</td>
					</tr>-->
            </tbody>
        </table>
    </div>

    <a href="#virt"></a>
    <div id="virt">
        <h5>
        	Virtualization
        </h5>
       
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>VMWare Workstation</td>
                    <td>
                        <a href="https://www.vmware.com/go/getworkstation-win" target="_blank">
                            Windows
                        </a>
                        &nbsp;
                        <a href="https://www.vmware.com/go/getworkstation-linux" target="_blank">
                            Linux
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>VMWare Fusion</td>
                    <td>
                        <a href="https://www.vmware.com/go/getfusion" target="_blank">
                            macOS
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <a href="#editor"></a>
    <div id="editor">
        <h5>
        	Editor
        </h5>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Notepad++</td>
                    <td>
                        <a href="https://notepad-plus-plus.org/downloads/" target="_blank">
                            Release Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Typora
                    </td>
                    <td>
                        <a href="https://www.typora.io/#windows" target="_blank">
                            Windows
                        </a>
                        &nbsp;
                        <a href="https://www.typora.io/download/Typora.dmg" target="_blank">
                            macOS
                        </a>
                        &nbsp;
                        <a href="https://www.typora.io/#linux" target="_blank">
                            Linux
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Sublime Text
                    </td>
                    <td>
                        <a href="http://www.sublimetext.com/3" target="_blank">
                            Download Page
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <a href="#download"></a>
    <div id="download">
        <h5>
        	Download
        </h5>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        迅雷
                    </td>
                    <td>
                        <a href="https://dl.xunlei.com/" target="_blank">
                            Download Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        百度网盘
                    </td>
                    <td>
                        <a href="https://pan.baidu.com/download#pan" target="_blank">
                            Download Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        qBittorrent
                    </td>
                    <td>
                        <a href="https://www.fosshub.com/qBittorrent.html" target="_blank">
                            Windows & macOS Download Page
                        </a>
                        &nbsp;
                        <a href="https://sourceforge.net/projects/qbittorrent/files/qbittorrent/" target="_blank">
                            Linux Release Page
                        </a>
                    </td>
                </tr>
                <!--<tr>
						<td>
							
						</td>
						<td>
							<a href="" target="_blank">
								
							</a>
							&nbsp;
						</td>
					</tr>-->
            </tbody>
        </table>
    </div>

    <a href="#game"></a>
    <div id="game">
        <h5>
        	Game
        </h5>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Steam
                    </td>
                    <td>
                        <a href="https://steamcdn-a.akamaihd.net/client/installer/SteamSetup.exe" target="_blank">
                            Windows
                        </a>
                        &nbsp;
                        <a href="https://steamcdn-a.akamaihd.net/client/installer/steam.dmg" target="_blank">
                            macOS
                        </a>
                        &nbsp;
                        <a href="https://steamcdn-a.akamaihd.net/client/installer/steam.deb" target="_blank">
                            Linux(deb package)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Battle.net
                    </td>
                    <td>
                        <a href="https://www.battlenet.com.cn/download/getInstallerForGame?os=win&locale=zhCN&version=LIVE&gameProgram=BATTLENET_APP" target="_blank">
                            Windows
                        </a>
                        &nbsp;
                        <a href="https://www.battlenet.com.cn/download/getInstallerForGame?os=mac&locale=zhCN&version=LIVE&gameProgram=BATTLENET_APP" target="_blank">
                            macOS
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Origin
                    </td>
                    <td>
                        <a href="https://www.dm.origin.com/download" target="_blank">
                            Windows
                        </a>
                        &nbsp;
                        <a href="https://www.dm.origin.com/mac/download" target="_blank">
                            macOS
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        GOG Galaxy
                    </td>
                    <td>
                        <a href="https://www.gog.com/galaxy" target="_blank">
                            Download Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        itch.io
                    </td>
                    <td>
                        <a href="http://nuts.itch.zone/download/windows" target="_blank">
                            Windows
                        </a>
                        &nbsp;
                        <a href="http://nuts.itch.zone/download/osx" target="_blank">
                            macOS
                        </a>
                        &nbsp;
                        <a href="http://nuts.itch.zone/download/linux" target="_blank">
                            Linux
                        </a> 
                    </td>
                </tr>
                <tr>
                    <td>
                        Uplay
                    </td>
                    <td>
                        <a href="https://www.ubisoft.com.cn/clicks/12" target="_blank">
                            Windows
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Bethesda Launcher
                    </td>
                    <td>
                        <a href="https://bethesda.net/game/bethesda-launcher" target="_blank">
                            Windows
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Epic Games Launcher
                    </td>
                    <td>
                        <a href="https://www.epicgames.com/store/zh-CN/" target="_blank">
                            Home Page (Top right corner)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        PS4 Remote Play
                    </td>
                    <td>
                        <a href="https://remoteplay.dl.playstation.net/remoteplay/module/win/RemotePlayInstaller.exe" target="_blank">
                            Windows
                        </a>
                        &nbsp;
                        <a href="https://remoteplay.dl.playstation.net/remoteplay/module/mac/RemotePlayInstaller.pkg" target="_blank">
                            macOS
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <a href="#im"></a>
    <div id="im">
        <h5>
        	IM
        </h5>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                	<td>TIM</td>
                	<td>
                  		<a href="https://tim.qq.com/download.html" target="_blank">
                        	Release Page
                    	</a>
                	</td>
            	</tr>
            	<tr>
                	<td>QQ</td>
                	<td>
                    	<a href="https://im.qq.com/download/" target="_blank">
                        	Release Page
                    	</a>
                	</td>
            	</tr>
                <tr>
                    <td>
                    	微信
                    </td>
                    <td>
                        <a href="https://pc.weixin.qq.com/" target="_blank">
                        	Windows
                        </a>
                        &nbsp;
                        <a href="https://dldir1.qq.com/weixin/mac/WeChatMac.dmg" target="_blank">
                        	macOS
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	Discord
                    </td>
                    <td>
                        <a href="https://discordapp.com/api/download?platform=win" target="_blank">
                        	Windows
                        </a>
                        &nbsp;
                        <a href="https://discordapp.com/api/download?platform=osx" target="_blank">
                        	macOS
                        </a>
                        &nbsp;
                        <a href="https://discordapp.com/api/download?platform=linux&format=deb" target="_blank">
                        	Linux(deb)
                        </a>
                        &nbsp;
                        <a href="https://discordapp.com/api/download?platform=linux&format=tar.gz" target="_blank">
                        	Linux(tar.gz)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	Telegram
                    </td>
                    <td>
                        <a href="https://telegram.org/dl/desktop/win" target="_blank">
                        	Windows
                        </a>
                        &nbsp;
                        <a href="https://telegram.org/dl/desktop/mac" target="_blank">
                        	macOS
                        </a>
                        &nbsp;
                        <a href="https://telegram.org/dl/desktop/linux" target="_blank">
                        	Linux(x64)
                        </a>
                        &nbsp;
                        <a href="https://telegram.org/dl/desktop/linux32" target="_blank">
                        	Linux(x32)
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <a href="#media"></a>
    <div id="media">
        <h5>
        	Media
        </h5>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
            	<tr>
                	<td>网易云音乐</td>
                	<td>
                    	<a href="https://music.163.com/#/download" target="_blank">
                        	Release Page
                    	</a>
                	</td>
            	</tr>
                <tr>
                    <td>
                    	Potplayer
                    </td>
                    <td>
                        <a href="http://potplayer.daum.net/" target="_blank">
                        	Download Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	VLC
                    </td>
                    <td>
                        <a href="https://www.videolan.org/vlc/download-windows.html" target="_blank">
                        	Windows
                        </a>
                        &nbsp;
                        <a href="https://www.videolan.org/vlc/download-macosx.html" target="_blank">
                        	macOS
                        </a>
                        &nbsp;
                        <a href="https://www.videolan.org/vlc/#download" target="_blank">
                        	Linux Distros & Other platforms
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	IINA
                    </td>
                    <td>
                        <a href="https://www.iina.io/download/" target="_blank">
                        	macOS
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <a href="#browser"></a>
    <div id="browser">
        <h5>
        	Browser
        </h5>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
            	<tr>
                    <td>
                    	Microsoft Edge
                    </td>
                    <td>
                        <a href="https://www.microsoft.com/zh-cn/edge/" target="_blank">
                        	Download Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	Chrome
                    </td>
                    <td>
                        <a href="https://www.google.com/chrome/" target="_blank">
                        	Download Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	FireFox
                    </td>
                    <td>
                        <a href="https://www.mozilla.org/en-US/firefox/download/thanks/" target="_blank">
                        	Download Page
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <a href="#office"></a>
    <div id="office">
        <h5>
        	Office
        </h5>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
            	<tr>
                    <td>
                    	Office Tool Plus
                    </td>
                    <td>
                        <a href="https://otp.landian.vip/en-us/download.html" target="_blank">
                        	Download Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	WPS
                    </td>
                    <td>
                        <a href="https://www.wps.cn/" target="_blank">
                        	Download Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	Draw.io
                    </td>
                    <td>
                        <a href="https://github.com/jgraph/drawio-desktop/releases" target="_blank">
                        	Release Page
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <a href="#net"></a>
    <div id="net">
        <h5>
        	Network
        </h5>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
				<tr>
                    <td>
                    	PuTTY
                    </td>
                    <td>
                    	<a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank">
                        	Release Page
                        </a>
                    </td>
                <tr>
				<tr>
                    <td>
                    	psping
                    </td>
                    <td>
                    	<a href="https://docs.microsoft.com/zh-cn/sysinternals/downloads/psping" target="_blank">
                        	Microsoft Page
                        </a>
                    </td>
                <tr>
            	<tr>
                    <td>
                    	Shadowsocks
                    </td>
                    <td>
                    	<a href="https://github.com/shadowsocks/shadowsocks-windows/releases" target="_blank">
                        	shadowsocks(windows)
                        </a>
                        &nbsp;
                        <a href="https://github.com/shadowsocks/ShadowsocksX-NG/releases" target="_blank">
                        	ShadowsocksX-NG (macOS)
                        </a>
                    </td>
                <tr>
                    <td>
                    	Clash
                    </td>
                    <td>
                        <a href="https://github.com/Fndroid/clash_for_windows_pkg/releases" target="_blank">
                        	clash_for_windows_pkg
                        </a>
                        &nbsp;
                        <a href="https://github.com/yichengchen/clashX/releases" target="_blank">
                        	clashX (macOS)
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	WireShark
                    </td>
                    <td>
                        <a href="https://www.wireshark.org/download.html" target="_blank">
                        	Download Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	Fiddler
                    </td>
                    <td>
                        <a href="https://www.telerik.com/download/fiddler" target="_blank">
                        	Windows Download Page
                        </a>
                        &nbsp;
                        <a href="https://www.telerik.com/download/fiddler-everywhere" target="_blank">
                        	macOS & Linux Download Page
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <a href="#remote"></a>
    <div id="remote">
        <h5>
        	Remote Desktop
        </h5>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    	Splashtop
                    </td>
                    <td>
                        <a href="https://www.splashtop.com/downloadstart?platform=auto" target="_blank">
                        	Splashtop Streamer
                        </a>
                        &nbsp;
                        <a href="https://www.splashtop.com/downloadstart?product=stp&platform=auto" target="_blank">
                        	Splashtop Personal
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	Teamviewer
                    </td>
                    <td>
                        <a href="https://www.teamviewer.cn/cn/teamviewer-automatic-download/" target="_blank">
                        	Direct Link
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	AnyDesk
                    </td>
                    <td>
                        <a href="https://anydesk.com/zhs/downloads/windows" target="_blank">
                        	Windows
                        </a>
                        &nbsp;
                        <a href="https://anydesk.com/zhs/downloads/mac-os" target="_blank">
                        	macOS
                        </a>
                        &nbsp;
                        <a href="https://anydesk.com/zhs/downloads/linux" target="_blank">
                        	Linux
                        </a>
                        &nbsp;
                        <a href="https://anydesk.com/zhs/downloads/freebsd" target="_blank">
                        	FreeBSD
                        </a>
                        &nbsp;
                        <a href="https://anydesk.com/zhs/downloads/raspberry-pi" target="_blank">
                        	Raspberry Pi
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <a href="#others"></a>
    <div id="others">
        <h5>
        	Others
        </h5>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
				<tr>
                    <td>
                    	7zip
                    </td>
                    <td>
                        <a href="https://www.7-zip.org/" target="_blank">
                        	Release Page
                        </a>
                    </td>
                </tr>
            	<tr>
                    <td>
                    	Dism++
                    </td>
                    <td>
                        <a href="https://github.com/Chuyu-Team/Dism-Multi-language/releases" target="_blank">
                        	Release Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	miniBin
                    </td>
                    <td>
                        <a href="https://e-sushi.net/minibin/" target="_blank">
                        	Official Site
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	TrafficMonitor
                    </td>
                    <td>
                        <a href="https://github.com/zhongyang219/TrafficMonitor/releases" target="_blank">
                        	Release Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	SpaceSniffer
                    </td>
                    <td>
                        <a href="http://www.uderzo.it/main_products/space_sniffer/download_alt.html" target="_blank">
                        	Release Page
                        </a>
                    </td>
                </tr>
				<tr>
                    <td>
                    	Authy
                    </td>
                    <td>
                        <a href="https://authy.com/download/" target="_blank">
                        	Release Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	Open Broadcaster Software(OBS)
                    </td>
                    <td>
                        <a href="https://obsproject.com/download" target="_blank">
                        	Download Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	Win32DiskImager
                    </td>
                    <td>
                        <a href="https://sourceforge.net/projects/win32diskimager/files/latest/download" target="_blank">
                        	Direct Link
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	etcher
                    </td>
                    <td>
                        <a href="https://github.com/balena-io/etcher/releases" target="_blank">
                        	Release Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	rufus
                    </td>
                    <td>
                        <a href="http://rufus.ie/downloads/" target="_blank">
                        	Release Page
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	SD Card Formatter
                    </td>
                    <td>
                        <a href="https://www.sdcard.org/downloads/formatter/eula_windows/index.html" target="_blank">
                        	Windows
                        </a>
                        &nbsp;
                        <a href="https://www.sdcard.org/downloads/formatter/eula_mac/index.html" target="_blank">
                        	macOS
                        </a>
                    </td>
                </tr>
				<tr>
                    <td>
                    	EasyUEFI
                    </td>
                    <td>
                        <a href="https://www.easyuefi.com/index-us.html" target="_blank">
                        	Download Page
						</a>
                    </td>
                </tr>
                <tr>
                    <td>
                    	iTunes
                    </td>
                    <td>
                        <a href="https://www.apple.com/itunes/download/win64" target="_blank">
                        	Windows(x64)
                        </a>
                        &nbsp;
                        <a href="https://www.apple.com/itunes/download/win32" target="_blank">
                        	Windows(x86)
                        </a>
                    </td>
                </tr>
				<tr>
                    <td>
                    	OpenHardwareMonitor
                    </td>
                    <td>
                        <a href="https://openhardwaremonitor.org/downloads/" target="_blank">
                        	Release Page
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- <a href="#"></a>
    <div id="">
        <h5>
        	
        </h5>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    </td>
                    <td>
                        <a href="" target="_blank">
                        </a>
                        &nbsp;
                    </td>
                </tr>
            </tbody>
        </table>
    </div> -->
	
	<footer class="footer navbar-fixed-bottom">
		<p clash="text-center">
			Powered by <a href="https://azhuge233.com" target="_blank">azhuge233</a> ·
			<a href="https://github.com/azhuge233/SoftwareDownloadLink" target="_blank">Github</a>
		</p>
	</footer>
	
</body>

<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/popper.js/1.16.1/popper.min.js"></script>
<script src="https://cdn.bootcss.com/twitter-bootstrap/4.4.1/js/bootstrap.min.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $("#TopBtn").hide();

        $(function() {

            $(window).scroll(function() {
                if($(window).scrollTop() > 200) {
                    $("#TopBtn").fadeIn(300);
                }
                else {
                    $("#TopBtn").fadeOut(500);
                }
            });

            $("#TopBtn").click(function() {
                $("body,html").animate({
                    scrollTop: 0
                }, 700);
                return false;
            });
        });
    });
</script>

</html>
`

async function handleRequest(request) {
  return new Response(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        }
      });
}