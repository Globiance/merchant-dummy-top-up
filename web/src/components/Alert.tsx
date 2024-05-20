import { Component, type InfernoNode } from 'inferno'

interface IAlertProps {
  message: string
  toggle: () => boolean
  onClose: () => void
}

export default class Alert extends Component<IAlertProps, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  setOpen(state: boolean): void {
    this.setState(Object.assign({}, { isOpen: state }))
  }

  render(props: Readonly<any>, state: Readonly<any>): InfernoNode {
    return (
      <div className="absolute top-8 left-0 w-full">
        <div
          className=" bg-red-300 w-[80%] m-auto shadow-lg rounded-lg border-2 border-red-600 flex justify-between"
          style={{ visibility: props?.toggle() ? 'visible' : 'hidden' }}
        >
          <h5 className="h5 h-auto w-full pad-5 m-0 break-words">
            {this.props.message}
          </h5>
          <div className="relative pad-5 m-0">
            <span
              onClick={() => {
                this.setOpen(false)
                props.onClose()
              }}
              className="absolute right-5 z-10 text-2xl hover:shadow-2xl cursor-pointer"
            >
              <p className="p-0 m-0">X</p>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
