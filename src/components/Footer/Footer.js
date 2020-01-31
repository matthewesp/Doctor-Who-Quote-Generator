import React, { PureComponent } from 'react'

class Footer extends PureComponent {

    render() {
        return (
          <div className="footer">
            <sub>
              This is was a project by{" "}
              <a href="https://www.techstratt.com/">Matthew Esparza</a> Check
              out my github{" "}
              <a href="https://github.com/matthewesp">right here</a>
            </sub>
          </div>
        );
    }
}

export default Footer