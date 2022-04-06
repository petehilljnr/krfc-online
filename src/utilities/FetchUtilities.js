const FixturesCall = (data, target_org) => {
    let fixtures = [];

    data.children.forEach(fixture=>{
        let attr = {};
        const f = {};

        fixture.children.forEach(c=>{
            attr[c.name] = c.value
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

        if(attr.TeamAOrganisationId === target_org || attr.TeamBOrganisationId === target_org) fixtures.push(f)
    })
    
    return(fixtures);
};

export { FixturesCall };

const getShortName = (name_string) => {
    const names = name_string.split(":");
    return names.length > 1 ? names[1].trim() : names[0].trim()
}