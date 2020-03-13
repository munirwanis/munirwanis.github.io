// swift-tools-version:5.1

import PackageDescription

let package = Package(
    name: "MunirwanisGithubIo",
    products: [
        .executable(name: "MunirwanisGithubIo", targets: ["MunirwanisGithubIo"])
    ],
    dependencies: [
        .package(url: "https://github.com/johnsundell/publish.git", from: "0.3.0")
    ],
    targets: [
        .target(
            name: "MunirwanisGithubIo",
            dependencies: ["Publish"]
        )
    ]
)