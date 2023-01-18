## Live Cricket Data
![image](https://user-images.githubusercontent.com/63545175/213104256-4f3953bd-7fd8-4ca8-a393-159427ad8281.png)



### HTML
```html
<template>
	<article class="slds-card" style="margin: 0px 0px 0px 0px; border: 0px; padding: 0px 0px 0px 0px;">
		<div class="slds-card__header slds-grid" style="overflow: hidden; margin: 10px; padding: 10px;">
			<header class="slds-media slds-media_center slds-has-flexi-truncate">
				<div class="slds-col slds-size_12-of-12">
					<h1>
						<b> List of all the matches: </b>
					</h1>

					Auto refresh <lightning-input type="number" placeholder="Enter no of minutes"
						style="display:inline; width: 12px;" value={noOfMinutes} onchange={handleInputChange}>
					</lightning-input>
					<lightning-button label="OK" data-value={noOfMinutes} onclick={refreshComponent}></lightning-button>
					<div style="float: right;">
						<lightning-button label="Refresh Now" data-value="0" onclick={refreshComponent}>
						</lightning-button>

					</div>
				</div>
			</header>
		</div>
	</article>


	<div style="width: 100%;    height: 84%;     overflow: scroll;    overflow-x: hidden;">
		<template if:true={ifListVisible}>
			<template for:each={list} for:item="match">
				<div key={match.id}>
					<article class="slds-card" style="margin: 10px; border: 0px; padding: 10px;">
						<div class="slds-card__header slds-grid" style="overflow: hidden;">
							<header class="slds-media slds-media_center slds-has-flexi-truncate">
								<div class="slds-col slds-size_4-of-12">
									<!--<a key={match.id} onclick={playSelected} data-value={match.id}>-->
									<!--<img src={item.id.imageUrl} value={item.id.videoUrl} class="thumbnail" >-->
									<header>
										<b> {match.name} </b>
									</header>

									<br/>

									<table>
										<tr>
											<td>
												<template for:each={match.teamInfo} for:item="team">
													<img key={team.shortname} src={team.img} style="max-width: 100px;">
</template>
											</td>
										</tr>
									</table>

									<br/>

									<table>
										<tr>
											<td> <b>Venue:</b></td>
											<td>{match.venue}</td>
										</tr>
										<tr>
											<td> <b>Date:</b></td>
											<td> {match.date}</td>
										</tr>
									</table>
									<!--</a>-->
								</div>

								<div class="slds-col slds-size_4-of-12">
									<table>
										<tr>
											<td> <b>Type:</b></td>
											<td>{match.matchType}</td>
										</tr>
										<tr>
											<td> <b>Status:</b></td>
											<td>{match.status}</td>
										</tr>
										<tr>
											<td> <b>Teams:</b></td>
											<td>{match.teams}</td>
										</tr>
										<template for:each={match.score} for:item="team">
											<tr key={team.inning}>
												<td key={team.inning} colspan="2"> <b><br/>Score of {team.inning}</b>
												</td>
											</tr>
											<tr key={team.inning}>
												<td key={team.inning} colspan="2">

													Runs: {team.r}

													<br/>
Wicket: {team.w}
													<br/>
Over: {team.o}

        </td>
											</tr>
										</template>
									</table>
								</div>
							</header>
						</div>
					</article>
				</div>
			</template>
		</template>
	</div>
</template>
```

### JS
```js
import { LightningElement, track, wire } from 'lwc';
import getUserLanguage from '@salesforce/apex/cricketDataController.getUserLanguage';

export default class CricketData extends LightningElement {

    @track ifListVisible = false;   // if list of matches should be visible
    @track list = [];               // will contain list of all the matches
    @track noOfMinutes = "";        // to referesh component every noOfMinutes

    language = [];                  // to store lang preference of current logged in user

    // to get the language preference of current logged in user
    @wire(getUserLanguage) wiredQlick({ data, error }) {
        if (data) {
            console.log("lang:");
            console.log(data);

            this.language = data;

            console.log('contact', this.language);
        } else if (error) {
            console.log("this occ:", error);
        }
    }

    // to take noOfMinutes as input through input field and update in variable
    handleInputChange(event) {
        this.noOfMinutes = event.target.value;
    }

    // refreshes the component after __ given no of minutes.
    refreshComponent(event) {
        console.log("minutes before:");
        console.log(this.noOfMinutes);

        this.noOfMinutes = event.currentTarget.dataset.value;

        console.log("minutes after:");
        console.log(this.noOfMinutes);

        setTimeout(() => {
            eval("$A.get('e.force:refreshView').fire();");
        }, this.noOfMinutes * 1000);

        //this.noOfMinutes = '';
    }

    connectedCallback() {
        this.list = [];   // iniitally list of matches should be empty

        //console.log("fetching list ....");

        const requestUrl = "https://api.cricapi.com/v1/currentMatches?apikey=XXXXXXXXXXXXXXXXXXXXXXXXXXXX&offset=0";
        //const requestUrl = "https://youtube.googleapis.com/youtube/v3/search";

        fetch(requestUrl)
            .then(response => response.json())
            .then(response => {
                console.log(response);

                //response = { "apikey": "XXXXXXXXXXXXXXXXXXXXXXXXXXX", "data": [{ "id": "6c5f4150-5050-45a8-b970-7a305a6bffc9", "name": "Namibia vs Nepal, 2nd Match", "matchType": "odi", "status": "No result (due to rain)", "venue": "Wanderers Cricket Ground, Windhoek", "date": "2022-12-02", "dateTimeGMT": "2022-12-02T07:30:00", "teams": ["Namibia", "Nepal"], "teamInfo": [{ "name": "Namibia", "shortname": "NAM", "img": "https://g.cricapi.com/img/teams/53-637877082656229722.webp" }, { "name": "Nepal", "shortname": "NEP", "img": "https://g.cricapi.com/img/teams/54-637877084789981539.webp" }], "score": [{ "r": 197, "w": 10, "o": 49.5, "inning": "Nepal Inning 1" }, { "r": 4, "w": 0, "o": 0.4, "inning": "Namibia Inning 1" }], "series_id": "638e7c98-fe04-4c84-946e-699f0abdc00c", "fantasyEnabled": true, "bbbEnabled": true, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "75daaab6-b99e-4038-9bf2-2565ba7f49c1", "name": "Nigeria vs Tanzania, 23rd Match", "matchType": "t20", "status": "No result (due to rain)", "venue": "Gahanga International Cricket Stadium, Kigali City", "date": "2022-12-08", "dateTimeGMT": "2022-12-08T11:45:00", "teams": ["Nigeria", "Tanzania"], "teamInfo": [{ "name": "Nigeria", "shortname": "NGA", "img": "https://g.cricapi.com/img/teams/635-637867646765235442.webp" }, { "name": "Tanzania", "shortname": "TZA", "img": "https://g.cricapi.com/img/teams/660-637867438190984232.webp" }], "score": [{ "r": 101, "w": 10, "o": 19.4, "inning": "Nigeria Inning 1" }, { "r": 19, "w": 3, "o": 4.3, "inning": "Tanzania Inning 1" }], "series_id": "2103eee4-874f-4f5a-b90b-6d08204681d1", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "846819d5-ce9f-4a9f-a638-a3ca9d29f766", "name": "Cameroon vs Eswatini, 22nd Match", "matchType": "t20", "status": "No result (due to rain)", "venue": "Integrated Polytechnic Regional Centre, Kigali City", "date": "2022-12-08", "dateTimeGMT": "2022-12-08T07:30:00", "teams": ["Cameroon", "Eswatini"], "teamInfo": [{ "name": "Cameroon", "shortname": "CAM", "img": "https://g.cricapi.com/img/teams/2415-637992079740539457.webp" }, { "name": "Eswatini", "shortname": "EWZ", "img": "https://g.cricapi.com/img/teams/602-637876983785379790.webp" }], "score": [{ "r": 112, "w": 6, "o": 13, "inning": "Eswatini Inning 1" }], "series_id": "2103eee4-874f-4f5a-b90b-6d08204681d1", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "23cfd382-da4c-415d-b114-744ba6e9da81", "name": "Durban Super Giants vs Joburg Super Kings, 2nd Match", "matchType": "t20", "status": "Joburg Super Kings won by 16 runs", "venue": "Kingsmead, Durban", "date": "2023-01-11", "dateTimeGMT": "2023-01-11T15:30:00", "teams": ["Durban Super Giants", "Joburg Super Kings"], "teamInfo": [{ "name": "Durban Super Giants", "shortname": "DSG", "img": "https://h.cricapi.com/img/icon512.png" }, { "name": "Joburg Super Kings", "shortname": "JSK", "img": "https://h.cricapi.com/img/icon512.png" }], "score": [{ "r": 190, "w": 6, "o": 20, "inning": "Joburg Super Kings Inning 1" }, { "r": 174, "w": 5, "o": 20, "inning": "Durban Super Giants Inning 1" }], "series_id": "9ee27942-3859-4b48-bc0c-954694117f28", "fantasyEnabled": true, "bbbEnabled": true, "hasSquad": true, "matchStarted": true, "matchEnded": true }, { "id": "58a5897b-49f2-4118-81e8-aa79d050256d", "name": "Canterbury vs Central Districts, 20th Match", "matchType": "odi", "status": "Canterbury won by 6 wkts", "venue": "Hagley Oval, Christchurch", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T22:00:00", "teams": ["Canterbury", "Central Districts"], "teamInfo": [{ "name": "Canterbury", "shortname": "CAN", "img": "https://g.cricapi.com/img/teams/15-637993523929449827.webp" }, { "name": "Central Districts", "shortname": "CD", "img": "https://g.cricapi.com/img/teams/16-637993517837161031.webp" }], "score": [{ "r": 250, "w": 8, "o": 50, "inning": "Central Districts Inning 1" }, { "r": 251, "w": 4, "o": 49, "inning": "Canterbury Inning 1" }], "series_id": "117d0127-4802-4ca9-8f1e-5cfc2f60708b", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": true }, { "id": "22218140-5756-4898-878f-e9f7bdcf2912", "name": "Goa vs Haryana, Round 7, Elite Group C", "matchType": "odi", "status": "Match tied (VJD)", "venue": "KSCA Cricket Ground, Alur", "date": "2022-11-23", "dateTimeGMT": "2022-11-23T03:30:00", "teams": ["Goa", "Haryana"], "teamInfo": [{ "name": "Goa", "shortname": "GOA", "img": "https://g.cricapi.com/img/teams/26-637897792202678375.png" }, { "name": "Haryana", "shortname": "HAR", "img": "https://g.cricapi.com/img/teams/28-637897793655542496.png" }], "score": [{ "r": 261, "w": 9, "o": 50, "inning": "Goa Inning 1" }, { "r": 154, "w": 5, "o": 23, "inning": "Haryana Inning 1" }], "series_id": "069215c9-f279-4c85-bf8f-bd560c8faac9", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "a600a707-694d-45eb-a9ec-e436fd5425dd", "name": "Bihar vs Tamil Nadu, Round 1, Elite Group C", "matchType": "odi", "status": "No Result - due to rain", "venue": "KSCA Cricket (3) Ground, Alur", "date": "2022-11-12", "dateTimeGMT": "2022-11-12T03:30:00", "teams": ["Bihar", "Tamil Nadu"], "teamInfo": [{ "name": "Bihar", "shortname": "BIH", "img": "https://g.cricapi.com/img/teams/13-637897789593616439.png" }, { "name": "Tamil Nadu", "shortname": "TN", "img": "https://g.cricapi.com/img/teams/87-637897804625426972.png" }], "score": [{ "r": 106, "w": 2, "o": 17.1, "inning": "Tamil Nadu Inning 1" }], "series_id": "069215c9-f279-4c85-bf8f-bd560c8faac9", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "b72f041f-e299-4d89-b453-a4e65371b996", "name": "Arunachal Pradesh vs Chhattisgarh, Round 1, Elite Group C", "matchType": "odi", "status": "No result - due to rain", "venue": "M.Chinnaswamy Stadium, Bengaluru", "date": "2022-11-12", "dateTimeGMT": "2022-11-12T03:30:00", "teams": ["Arunachal Pradesh", "Chhattisgarh"], "teamInfo": [{ "name": "Arunachal Pradesh", "shortname": "ARNP", "img": "https://g.cricapi.com/img/teams/3-637897787732978973.png" }, { "name": "Chhattisgarh", "shortname": "CG", "img": "https://g.cricapi.com/img/teams/18-637897790441171438.png" }], "score": [{ "r": 137, "w": 4, "o": 21, "inning": "Chhattisgarh Inning 1" }, { "r": 35, "w": 2, "o": 8.1, "inning": "Arunachal Pradesh Inning 1" }], "series_id": "069215c9-f279-4c85-bf8f-bd560c8faac9", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "f1d958cc-e883-4532-818d-53617659f595", "name": "Brisbane Heat vs Perth Scorchers, 37th Match", "matchType": "t20", "status": "Perth Scorchers won by 8 wkts", "venue": "The Gabba, Brisbane", "date": "2023-01-11", "dateTimeGMT": "2023-01-11T08:40:00", "teams": ["Brisbane Heat", "Perth Scorchers"], "teamInfo": [{ "name": "Brisbane Heat", "shortname": "BRH", "img": "https://g.cricapi.com/img/teams/128-637957474274254899.webp" }, { "name": "Perth Scorchers", "shortname": "PRS", "img": "https://g.cricapi.com/img/teams/242-637939328672409529.webp" }], "score": [{ "r": 155, "w": 6, "o": 20, "inning": "Brisbane Heat Inning 1" }, { "r": 157, "w": 2, "o": 16.2, "inning": "Perth Scorchers Inning 1" }], "series_id": "43fb7c6c-7b26-4c0c-aac2-a0362f96f393", "fantasyEnabled": true, "bbbEnabled": true, "hasSquad": true, "matchStarted": true, "matchEnded": true }, { "id": "86826aff-1b0d-47b0-9365-cbe9b4357110", "name": "Maharashtra vs Tamil Nadu, Elite Group B", "matchType": "test", "status": "Day 3: 1st Session - Tamil Nadu trail by 141 runs", "venue": "Maharashtra Cricket Association Stadium, Pune", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Maharashtra", "Tamil Nadu"], "teamInfo": [{ "name": "Maharashtra", "shortname": "MAH", "img": "https://g.cricapi.com/img/teams/45-637897797960178569.png" }, { "name": "Tamil Nadu", "shortname": "TN", "img": "https://g.cricapi.com/img/teams/87-637897804625426972.png" }], "score": [{ "r": 445, "w": 10, "o": 98, "inning": "Maharashtra Inning 1" }, { "r": 304, "w": 6, "o": 79, "inning": "Tamil Nadu Inning 1" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "76368bec-a1ec-4f24-a680-d7bde0cbefc5", "name": "Assam vs Mumbai, Elite Group B", "matchType": "test", "status": "Day 3: Lunch Break - Assam trail by 449 runs", "venue": "Amingaon Cricket Ground, Guwahati", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Assam", "Mumbai"], "teamInfo": [{ "name": "Assam", "shortname": "ASM", "img": "https://g.cricapi.com/img/teams/4-637897788303626448.png" }, { "name": "Mumbai", "shortname": "MUM", "img": "https://g.cricapi.com/img/teams/51-637897800490404099.png" }], "score": [{ "r": 687, "w": 4, "o": 138.4, "inning": "Mumbai Inning 1" }, { "r": 238, "w": 6, "o": 69.3, "inning": "Assam Inning 1" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "03c7ab63-76bd-4720-a118-4a6ed7abbbd5", "name": "Delhi vs Andhra, Elite Group B", "matchType": "test", "status": "Day 3: 1st Session - Delhi trail by 440 runs", "venue": "Arun Jaitley Stadium, Delhi", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Delhi", "Andhra"], "teamInfo": [{ "name": "Andhra", "shortname": "AP", "img": "https://g.cricapi.com/img/teams/2-637897787068768481.png" }, { "name": "Delhi", "shortname": "DEL", "img": "https://g.cricapi.com/img/teams/19-637897791252425890.png" }], "score": [{ "r": 459, "w": 9, "o": 133.2, "inning": "Andhra Inning 1" }, { "r": 19, "w": 1, "o": 9, "inning": "Delhi Inning 1" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "f13c2ec5-090c-45e6-a197-0a78ab958b68", "name": "Uttar Pradesh vs Uttarakhand, Elite Group A", "matchType": "test", "status": "Day 3: delayed due to Bad Light - Uttar Pradesh opt to bat", "venue": "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Uttar Pradesh", "Uttarakhand"], "teamInfo": [{ "name": "Uttar Pradesh", "shortname": "UP", "img": "https://g.cricapi.com/img/teams/94-637897806676935322.png" }, { "name": "Uttarakhand", "shortname": "UTK", "img": "https://g.cricapi.com/img/teams/95-637897806132002810.png" }], "score": [{ "r": 107, "w": 6, "o": 52, "inning": "Uttar Pradesh Inning 1" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "f43c18cc-0eaf-4c36-a3d6-fae08ef3b6d6", "name": "Bengal vs Baroda, Elite Group A", "matchType": "test", "status": "Day 3: Lunch Break - Baroda lead by 127 runs", "venue": "Bengal Cricket Academy Ground, West Bengal", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Bengal", "Baroda"], "teamInfo": [{ "name": "Baroda", "shortname": "BRD", "img": "https://g.cricapi.com/img/teams/11-637897788547716432.png" }, { "name": "Bengal", "shortname": "BEN", "img": "https://g.cricapi.com/img/teams/12-637897789312826453.png" }], "score": [{ "r": 269, "w": 10, "o": 100.1, "inning": "Baroda Inning 1" }, { "r": 191, "w": 10, "o": 59.3, "inning": "Bengal Inning 1" }, { "r": 49, "w": 7, "o": 27, "inning": "Baroda Inning 2" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "dc7df945-6306-40ef-b9f6-120cc08d7230", "name": "Himachal Pradesh vs Odisha, Elite Group A", "matchType": "test", "status": "Day 3: 1st Session - Odisha lead by 2 runs", "venue": "Atal Bihari Vajpayee Stadium, Nadaun", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Himachal Pradesh", "Odisha"], "teamInfo": [{ "name": "Himachal Pradesh", "shortname": "HP", "img": "https://g.cricapi.com/img/teams/29-637897794090988497.png" }, { "name": "Odisha", "shortname": "ODSA", "img": "https://g.cricapi.com/img/teams/63-637897801546556330.png" }], "score": [{ "r": 191, "w": 10, "o": 50, "inning": "Odisha Inning 1" }, { "r": 258, "w": 10, "o": 76.5, "inning": "Himachal Pradesh Inning 1" }, { "r": 69, "w": 2, "o": 28, "inning": "Odisha Inning 2" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "d870b397-3673-4232-b4eb-4e35146ed4d6", "name": "Haryana vs Nagaland, Elite Group A", "matchType": "test", "status": "Day 3: 1st Session - Haryana trail by 32 runs", "venue": "Ch Bansi Lal Cricket Stadium, Rohtak", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Haryana", "Nagaland"], "teamInfo": [{ "name": "Haryana", "shortname": "HAR", "img": "https://g.cricapi.com/img/teams/28-637897793655542496.png" }, { "name": "Nagaland", "shortname": "NGL", "img": "https://g.cricapi.com/img/teams/52-637897800938942974.png" }], "score": [{ "r": 88, "w": 10, "o": 42.1, "inning": "Nagaland Inning 1" }, { "r": 56, "w": 2, "o": 14.5, "inning": "Haryana Inning 1" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "fceb142f-dc64-4ee5-8d23-aecc56d1ca7d", "name": "Karnataka vs Rajasthan, Elite Group C", "matchType": "test", "status": "Day 3: Innings Break - Karnataka lead by 316 runs", "venue": "KSCA Cricket Ground, Alur", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Karnataka", "Rajasthan"], "teamInfo": [{ "name": "Karnataka", "shortname": "KAR", "img": "https://g.cricapi.com/img/teams/38-637897796420763611.png" }, { "name": "Rajasthan", "shortname": "RAJ", "img": "https://g.cricapi.com/img/teams/76-637897803285904034.png" }], "score": [{ "r": 129, "w": 10, "o": 45.3, "inning": "Rajasthan Inning 1" }, { "r": 445, "w": 10, "o": 132.1, "inning": "Karnataka Inning 1" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "4a201172-4eb6-40ce-aa86-1219e8f063ce", "name": "Kerala vs Services, Elite Group C", "matchType": "test", "status": "Day 3: 1st Session - Services trail by 113 runs", "venue": "St Xavier\u0027s College Ground, Thumba, Thiruvananthapuram", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Kerala", "Services"], "teamInfo": [{ "name": "Kerala", "shortname": "KER", "img": "https://g.cricapi.com/img/teams/39-637897797224429950.png" }, { "name": "Services", "shortname": "SER", "img": "https://g.cricapi.com/img/teams/80-637897803943638638.png" }], "score": [{ "r": 327, "w": 10, "o": 121, "inning": "Kerala Inning 1" }, { "r": 214, "w": 8, "o": 64, "inning": "Services Inning 1" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "35c0ce7e-ce4b-4a63-ad31-045f56c17950", "name": "Chhattisgarh vs Jharkhand, Elite Group C", "matchType": "test", "status": "Day 3: 1st Session - Jharkhand lead by 299 runs", "venue": "Keenan Stadium, Jamshedpur", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Chhattisgarh", "Jharkhand"], "teamInfo": [{ "name": "Chhattisgarh", "shortname": "CG", "img": "https://g.cricapi.com/img/teams/18-637897790441171438.png" }, { "name": "Jharkhand", "shortname": "JHKD", "img": "https://g.cricapi.com/img/teams/36-637897796049905291.png" }], "score": [{ "r": 103, "w": 10, "o": 32.1, "inning": "Jharkhand Inning 1" }, { "r": 113, "w": 10, "o": 50.3, "inning": "Chhattisgarh Inning 1" }, { "r": 309, "w": 8, "o": 89, "inning": "Jharkhand Inning 2" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "905c1183-c3f0-4843-bc07-04441e3c62ac", "name": "Meghalaya vs Manipur, Plate", "matchType": "test", "status": "Manipur won by 8 wkts", "venue": "Meghalaya Cricket Association Cricket Ground, Shillong", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Meghalaya", "Manipur"], "teamInfo": [{ "name": "Manipur", "shortname": "MNP", "img": "https://g.cricapi.com/img/teams/46-637897798559839649.png" }, { "name": "Meghalaya", "shortname": "MGLY", "img": "https://g.cricapi.com/img/teams/47-637897799109677927.png" }], "score": [{ "r": 157, "w": 10, "o": 53.1, "inning": "Meghalaya Inning 1" }, { "r": 220, "w": 10, "o": 65.2, "inning": "Manipur Inning 1" }, { "r": 91, "w": 10, "o": 34, "inning": "Meghalaya Inning 2" }, { "r": 29, "w": 2, "o": 9, "inning": "Manipur Inning 2" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": true }, { "id": "d9a58e43-c0ec-4ddc-87dc-339756dd54b3", "name": "Mizoram vs Bihar, Plate", "matchType": "test", "status": "Day 3: 1st Session - Mizoram trail by 438 runs", "venue": "GS Patel Stadium, Nadiad", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Mizoram", "Bihar"], "teamInfo": [{ "name": "Bihar", "shortname": "BIH", "img": "https://g.cricapi.com/img/teams/13-637897789593616439.png" }, { "name": "Mizoram", "shortname": "MIZ", "img": "https://g.cricapi.com/img/teams/48-637897799543539926.png" }], "score": [{ "r": 474, "w": 10, "o": 165.1, "inning": "Bihar Inning 1" }, { "r": 36, "w": 2, "o": 11, "inning": "Mizoram Inning 1" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "c852b90d-b04c-410d-bec9-879c9b17a02b", "name": "Sikkim vs Arunachal Pradesh, Plate", "matchType": "test", "status": "Day 3: 2nd Session - Arunachal Pradesh trail by 291 runs", "venue": "SICA ground, Rangpo", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Sikkim", "Arunachal Pradesh"], "teamInfo": [{ "name": "Arunachal Pradesh", "shortname": "ARNP", "img": "https://g.cricapi.com/img/teams/3-637897787732978973.png" }, { "name": "Sikkim", "shortname": "SKM", "img": "https://g.cricapi.com/img/teams/81-637897804239198149.png" }], "score": [{ "r": 213, "w": 10, "o": 56.3, "inning": "Arunachal Pradesh Inning 1" }, { "r": 532, "w": 10, "o": 125.4, "inning": "Sikkim Inning 1" }, { "r": 28, "w": 1, "o": 12, "inning": "Arunachal Pradesh Inning 2" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "62e04f38-361e-4796-8bac-b2172a14c065", "name": "Railways vs Tripura, Elite Group D", "matchType": "test", "status": "Day 3: 1st Session - Tripura trail by 171 runs", "venue": "Lalabhai Contractor Stadium, Surat", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Railways", "Tripura"], "teamInfo": [{ "name": "Railways", "shortname": "RLYS", "img": "https://g.cricapi.com/img/teams/75-637897802979231020.png" }, { "name": "Tripura", "shortname": "TRI", "img": "https://g.cricapi.com/img/teams/90-637897805085647315.png" }], "score": [{ "r": 96, "w": 10, "o": 49.3, "inning": "Tripura Inning 1" }, { "r": 337, "w": 10, "o": 109.1, "inning": "Railways Inning 1" }, { "r": 70, "w": 1, "o": 14, "inning": "Tripura Inning 2" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "df49755e-1379-4b6f-9b8e-e2ef8fe8ebeb", "name": "Madhya Pradesh vs Gujarat, Elite Group D", "matchType": "test", "status": "Day 3: 1st Session - Gujarat trail by 114 runs", "venue": "Holkar Cricket Stadium, Indore", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Madhya Pradesh", "Gujarat"], "teamInfo": [{ "name": "Gujarat", "shortname": "GUJ", "img": "https://g.cricapi.com/img/teams/27-637897792592204662.png" }, { "name": "Madhya Pradesh", "shortname": "MP", "img": "https://g.cricapi.com/img/teams/44-637897797618832180.png" }], "score": [{ "r": 312, "w": 10, "o": 115.4, "inning": "Madhya Pradesh Inning 1" }, { "r": 198, "w": 6, "o": 70, "inning": "Gujarat Inning 1" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }, { "id": "bfe2d94c-771d-4952-8d27-265699bc677c", "name": "Chandigarh vs Vidarbha, Elite Group D", "matchType": "test", "status": "Day 3: 1st Session - Chandigarh opt to bowl", "venue": "Sector 16 Stadium, Chandigarh", "date": "2023-01-10", "dateTimeGMT": "2023-01-10T03:30:00", "teams": ["Chandigarh", "Vidarbha"], "teamInfo": [{ "name": "Chandigarh", "shortname": "CDG", "img": "https://g.cricapi.com/img/teams/17-637897790786615930.png" }, { "name": "Vidarbha", "shortname": "VID", "img": "https://g.cricapi.com/img/teams/97-637897807024164117.png" }], "score": [{ "r": 11, "w": 0, "o": 4, "inning": "Vidarbha Inning 1" }], "series_id": "7763166a-9c3e-420b-9567-c495b52340c0", "fantasyEnabled": true, "bbbEnabled": false, "hasSquad": true, "matchStarted": true, "matchEnded": false }], "status": "success", "info": { "hitsToday": 1, "hitsUsed": 1, "hitsLimit": 100, "credits": 0, "server": 16, "offsetRows": 0, "totalRows": 36, "queryTime": 46.8032, "s": 0, "cache": 0 } };

                this.list = response.data;

                //console.log("#### before ");
                //console.log(this.list);

                //  for each list item(i.e object of match details) get more details about match
                /*
                this.list.forEach(item => {
                    // with current list item(i.e object) add _ & _ also
                    
                    // to get more details about match created another request
                    const detailsUrl = "";

                    fetch(detailsUrl)
                        .then(response => response.json())
                        .then(response => {

                        });
                });

                //console.log("####after");
                //console.log(this.list);
                */

            })
            .catch(err => console.error(err));

        //this.ifVideoVisible = false;
        this.ifListVisible = true;

        /*
        // this code is for making input field inline
        const style = document.createElement('style');
        style.innerText = `.newStyle{
        display: inline;
        width:12px;
        }`
        
        setTimeout(()=>{
        this.template.querySelector('.slds-form-element__control').classList.add('newStyle');
        this.template.querySelector('.slds-input').classList.add('newStyle');
        }, 1000);
        */

        console.log("language: ");
        console.log(this.language);
    }
}
```



