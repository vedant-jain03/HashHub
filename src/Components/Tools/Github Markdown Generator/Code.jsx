import React from 'react'
import "./Homepage.css"
function Code({ logo, heading, tag1, tag2, tag3, tag4, tag5, tag6, feat, overview, motive, techlist, conc, photos, github, repo, cont }) {
    return (
        <div className="code section">
            <h1 className="heading">Readme Code</h1>
            <div className="readme-md">
                {logo === '' ? null : <p>{`<center><img src=${logo} alt="" /></center>`}</p>}

                {heading === '' ? null : <p>{`# ${heading} `}</p>}

                <p>{tag1.left === '' ? null : `![Badge](https://img.shields.io/badge/${tag1.left}-${tag1.right}-yellow) `}  {tag2.left === '' ? null : `![Badge](https://img.shields.io/badge/${tag2.left}-${tag2.right}-green) `}{tag3.left === '' ? null : `![Badge](https://img.shields.io/badge/${tag3.left}-${tag3.right}-blue) `}{tag4.left === '' ? null : `![Badge](https://img.shields.io/badge/${tag4.left}-${tag4.right}-orange) `}{tag5.left === '' ? null : `![Badge](https://img.shields.io/badge/${tag5.left}-${tag5.right}-pink) `}{tag6.left === '' ? null : `![Badge](https://img.shields.io/badge/${tag6.left}-${tag6.right}-red) `}</p>

                {overview === '' ? null : <><p>{`## Overview 🔨`}</p>

                    <p>{overview}</p></>}

                {motive === '' ? null : <> <p>{`## Motive 🌏 `}</p>

                    <p>{motive}</p></>}

                {feat.length === 0 ? null : <p>{`## Features 🔑`}</p>}

                {
                    feat.map((item) => {
                        return (<>
                            {`* ${item}`} <br />
                        </>
                        )
                    })
                }

                {techlist.length === 0 ? null : <p>{`## Technology Used 🖥️ `}</p>}

                {
                    techlist.map((item) => {
                        return (
                            <>
                                {`* ${item}`}
                                <br />
                            </>
                        )
                    })
                }
                {photos.length === 0 ? null : <p>{`## Screenshot 📸 `}</p>}
                {
                    photos.map((item) => {
                        return (
                            <>
                                {`<img src='${item}' alt="" />`}
                                <br />
                            </>
                        )
                    })
                }
                <br /><br />


                {cont === false ? null : <div>## Contribution Guidelines🏗

                    <br /><br />
                    Are we missing any of your favorite features, which you think you can add to it❓ We invite you to contribute to this project and make it better.
                    To start contributing, follow the below guidelines:
                    <br /><br />
                    **1.**  Fork [this](https://github.com/{`${github}`}/{`${repo}`}) repository.
                    <br /><br />
                    **2.**  Clone your forked copy of the project.
                    <br /><br />
                    ```
                    <br />
                    git clone https://github.com/{`${github}`}/{`${repo}`}.git
                    <br />
                    ```
                    <br /><br />
                    **3.** Navigate to the project directory :file_folder: .
                    <br /><br />
                    ```
                    <br />
                    cd {`${repo}`}
                    <br />
                    ```
                    <br /><br />
                    **4.** Add a reference(remote) to the original repository.
                    <br /><br />
                    ```
                    <br />
                    git remote add upstream https://github.com/{`${github}`}/{`${repo}`}.git
                    <br />
                    ```
                    <br /><br />
                    **5.** Check the remotes for this repository.
                    <br /><br />
                    ```<br />
                    git remote -v
                    <br />
                    ```
                    <br /><br />
                    **6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).
                    <br /><br />
                    ```<br />
                    git pull upstream main
                    <br />
                    ```
                    <br /><br />
                    **7.** Create a new branch.
                    <br /><br />
                    ```<br />
                    git checkout -b {'<your_branch_name>'}
                    <br />
                    ```
                    <br /><br />
                    **8.** Perfom your desired changes to the code base.
                    <br /><br />
                    **9.** Track your changes:heavy_check_mark: .
                    <br /><br />
                    ```<br />
                    git add .
                    <br />
                    ```
                    <br /><br />
                    **10.** Commit your changes .
                    <br /><br />
                    ```<br />
                    git commit -m "Relevant message"
                    <br />
                    ```
                    <br /><br />
                    **11.** Push the committed changes in your feature branch to your remote repo.
                    <br /><br />
                    ```<br />
                    git push -u origin {'<your_branch_name>'}
                    <br />
                    ```
                    <br /><br />
                    **12.** To create a pull request, click on `compare and pull requests`.
                    <br /><br />
                    **13.** Add appropriate title and description to your pull request explaining your changes and efforts done.
                    <br /><br />
                    **14.** Click on `Create Pull Request`.
                    <br /><br />
                    **15** Voila :exclamation: You have made a PR to the awesome-javascript-projects :boom: . Wait for your submission to be accepted and your PR to be merged.
                </div>
                } {conc === '' ? null : <p>{`## Conclusion ❤️`}</p>}
                <p>{conc}</p>
                <p>Made by ❤️ using [Readme.md Generator](https://github.com/vedant-jain03/Repo-Readme-Md-Generator) </p>
            </div>
        </div>
    )
}

export default Code
