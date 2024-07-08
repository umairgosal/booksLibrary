

function Stats(){

    return(
        <div className="stats shadow">
          {/* <div className="w-1 gri grid-cols-1"></div> */}
            <div className="stat place-items-center">
              <div className="stat-title">Downloads</div>
              <div className="stat-value hover:text-blue-400">31K</div>
              <div className="stat-desc">From January 1st to February 1st</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Users</div>
              <div className="stat-value text-secondary hover:text-blue-400">4,200</div>
              <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">New Registers</div>
              <div className="stat-value hover:text-blue-400">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
        </div>
    );
}

export default Stats