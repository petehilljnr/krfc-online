import XMLParser from "react-xml-parser";
import axios from "axios";
export const fixturesFormat = (xml, target_org) => {
  const data = new XMLParser().parseFromString(xml);

  let fixtures = [];

  data.children.forEach((fixture) => {
    let attr = {};
    const f = {};

    fixture.children.forEach((c) => {
      attr[c.name] = c.value;
    });

    f.fixture_id = attr.Id;
    f.home_logo = attr.HomeOrganisationLogo;
    f.away_logo = attr.AwayOrganisationLogo;
    f.location = attr.VenueName;
    f.fixture_date = attr.Date;
    f.home_id = attr.TeamAOrganisationId;
    f.away_id = attr.TeamBOrganisationId;
    f.grade_id = attr.GradeId;
    f.grade_name = attr.GradeName;
    f.round_id = attr.Round;
    f.round_name = attr.RoundName;
    f.section_name = attr.SectionName;
    f.home_team = getShortName(attr.HomeTeamName);
    f.away_team = getShortName(attr.AwayTeamName);
    f.trophy = attr.PublicNotes ? htmlDecode(attr.PublicNotes) : "";

    if (!target_org || target_org === "") {
      fixtures.push(f);
    } else {
      if (
        attr.TeamAOrganisationId === target_org ||
        attr.TeamBOrganisationId === target_org
      ) {
        fixtures.push(f);
      }
    }
  });

  return fixtures;
};

function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes[0].nodeValue;
  }

export const getShortName = (name_string) => {
  const names = name_string.split(":");
  return names.length > 1 ? names[1].trim() : names[0].trim();
};

export const fetchFixtures  = async (comp_id, grade_id) => {
  return await axios.get(
    `https://sportsgroundproduction.blob.core.windows.net/skedcache/fixtures/${comp_id}/${grade_id}`,
   { headers: {
        
    }}
  );
}

/*
export const fetchFixturesTest  = async () => {
    return await axios.get(
      `https://sportsgroundproduction.blob.core.windows.net/skedcache/fixtures/4561/85899`
    );
  }

export function fetchFixtures_plain(comp_id, grade_id) {
  return axios.get(
    `https://sportsgroundproduction.blob.core.windows.net/skedcache/fixtures/${comp_id}/${grade_id}`
  );
}
*/